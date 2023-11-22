ItemEvents.rightClicked('origins:orb_of_origin', event => {
    const specialisationSkillTreeList = ['berserker', 'cleric', 'crusader', 'ranger', 'rogue', 'spellblade', 'wizard']
    let player = event.entity.name.string

    event.server.scheduleInTicks(20, event => {
        specialisationSkillTreeList.forEach(skillTree => {
            event.server.runCommand('puffish_skills category erase '+ player +' simplyskills:' + skillTree)
        })
    })
    event.server.runCommand('puffish_skills skills reset ' + player +' simplyskills:tree')
})
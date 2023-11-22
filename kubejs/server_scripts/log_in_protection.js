PlayerEvents.loggedIn(event => {
    let player = event.player.name.string

    event.server.runCommand(
        'effect give '
        + player
        +' amethyst_imbuement:sanctuary 60 0 true'
    )
})
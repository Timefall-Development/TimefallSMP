priority: 0

console.info('Adding Timefall SMP Custom Items')

StartupEvents.registry('item', event => {
    // Register new items here
    event.create('rainbow_quartz')
        .texture('tfsmp:item/rainbow_quartz')
        .maxStackSize(64)
    console.info('Added Rainbow Quartz')
})

//globalThis.hammyWammy = ctx => {
//    ctx.player.name
//}

console.info('Custom items finished being added!')

//StartupEvents.registry('block', event => {
// // Register new blocks here
// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
//})
console.log("Test");

WA.chat.sendChatMessage('Hello world', 'Mr Robot');

WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnterLayer('start').subscribe(() => {
        console.log("Spawnpoint entered")
    })

    WA.room.area.onLeaveLayer('start').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));
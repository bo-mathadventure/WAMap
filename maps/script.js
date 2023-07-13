console.log("Test");

WA.chat.sendChatMessage('Hello world', 'Mr Robot');

WA.onInit().then(() => {
    WA.room.area.onEnter('start').subscribe(() => {
        console.log("Spawnpoint entered");
        WA.chat.sendChatMessage("Hello!", "Mr Robot");
    })
    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));
client.on('message', message => {
 if(message.content.startsWith(prefix + "تعال")) {
message.member.voiceChannel.join();
}
});

==============================
client.on('message', msg => {

    if (msg.content == '1join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("488484402586714112").join();
    });

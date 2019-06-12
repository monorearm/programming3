function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById("del")

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }

    function handleDelete() {
        socket.emit("uzum em jnjem");
    }

    button.onclick = handleSubmit;
    
    del.onclick = handleDelete;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    function deleteFromDom() {
        var p = document.getElementsByTagName("p");
        for (var i in p) {
            if (p.length > 0) {
                chatDiv.removeChild(p[0]);
            }
        }
    }
    socket.on('display message', handleMessage);
    socket.on('de dzer motic jnjeq', deleteFromDom);
} // main closing bracket

window.onload = main;
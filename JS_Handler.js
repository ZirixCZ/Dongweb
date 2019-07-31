function inviteButton() {
    window.open("https://discord.gg/g6uyHEj")
}

document.getElementById("invite_button").addEventListener("click", inviteButton)

function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent = h + ":" + m + ":" + s;
    
}
let span = document.getElementById('cas');
setInterval(time,1000);

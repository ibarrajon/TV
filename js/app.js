function cargarVideo(id){
    const player = document.getElementById("player");

    player.src ="https://geo.dailymotion.com/player.html?video=" + id;

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

window.onload=function(){
    ultimoVideo = localStorage.getItem("ultimoVideo");
    ultimoNombre = localStorage.getItem("ultimoNombre");

    if(ultimoVideo){
        mostrarContinuar();
    }
}
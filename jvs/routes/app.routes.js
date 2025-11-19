// routes

function goHome(){
    window.open("http://127.0.0.1:5500/index.html", '_self');
}

function goAbout(){
    window.open("http://127.0.0.1:5500/about.html", '_self');
}

function goProjects(){
    window.open("http://127.0.0.1:5500/curry.html", '_self');
}

function goContact(){
    window.open("http://127.0.0.1:5500/conta.html", '_self');
}

// eventListener
const home = document.getElementById("linkhome");
home.addEventListener('click', goHome);

const proj = document.getElementById("linkproj");
proj.addEventListener('click', goProjects);

const about = document.getElementById("linkabout");
about.addEventListener('click', goAbout);

const conta = document.getElementById("comewithme");
conta.addEventListener('click', goContact);
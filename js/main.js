var about = document.getElementById('sobre-mi');
var proyect = document.getElementById('proyectos');
var knowledge = document.getElementById('conocimientos');
var contact = document.getElementById('contacto');

const borrar = ()=>{
    about.innerHTML = "";
    proyect.innerHTML = "";
    knowledge.innerHTML = "";
    contact.innerHTML = "";
};

const mostrarAbout = ()=>{
    borrar();
    about.style.display ="block"
    about.innerHTML = "aqui hablo sobre mi";
}
const mostrarProyect = ()=>{
    borrar();
    proyect.style.display ="block"
    proyect.innerHTML = "aqui hablo sobre mis proyectos";
}
const mostrarKnowledge = ()=>{
    borrar();
    knowledge.style.display ="block"
    knowledge.innerHTML = "aqui hablo sobre mis conocimientos";
}
const mostrarContact = ()=>{
    borrar();
    contact.style.display ="block"
    contact.innerHTML = "aqui pongo mis datos de contacto";
}


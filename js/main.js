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
document.getElementById('btnSwitch').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const moonIcon = '<i class="fa-solid fa-moon"></i>';
    const sunIcon = '<i class="fa-solid fa-sun"></i>';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('btnSwitch').innerHTML = moonIcon;
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.getElementById('btnSwitch').innerHTML = sunIcon;
    }
});


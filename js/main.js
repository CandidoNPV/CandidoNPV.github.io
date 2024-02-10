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
    contact.innerHTML = `
    <h4><p class="text-center">Puedes ponerte en contacto conmigo de las siguientes maneras</p></h4>
              <div class="container redes-sociales">
                <div class="contenedor-contacto ">
                <a href="mailto:candidonpv@gmail.com?subject=Correo desde candidonpv.github.io" class="mail red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa-solid fa-envelope-open-text"></i></a>
                <a href="https://www.linkedin.com/in/candido-nicolas-perez-verwer-971855220/" class="linkedin red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Kanosk" class="github red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa fa-github"></i></a>
                <a href="https://twitter.com/kanosk44" class="twitter red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
              </div>
              </div>
  `;
}



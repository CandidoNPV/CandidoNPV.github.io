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
    <div class="container redes-sociales">
    <div class="contenedor">
      <a href="https://twitter.com/kanosk44" class="twitter" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="https://github.com/Kanosk" class="github" target="_blank"><i class="fa fa-github"></i></a>
      <a href="https://www.linkedin.com/in/candido-nicolas-perez-verwer-971855220/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
      <a href="./cv/cv_candidonpv.pdf" class="cv" id="cv" download><i class="fa-solid fa-file-pdf"></i></a>
  </div>
  `;
}



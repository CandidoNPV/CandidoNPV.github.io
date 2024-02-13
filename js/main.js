var ini = document.getElementById('ini');
var about = document.getElementById('sobre-mi');
var proyect = document.getElementById('proyectos');
var contact = document.getElementById('contacto');

const borrar = ()=>{
    ini.innerHTML = "";
    ini.style.display = "none";
    about.innerHTML = "";
    proyect.innerHTML = "";
    contact.innerHTML = "";
};
const mostrarIni = () =>{
    borrar();
    ini.style.display = "block";
    ini.innerHTML = `
    <p>Bienvenido a mi porfolio como desarrollador trainee</p>
    `;
}

const mostrarAbout = ()=>{
    borrar();
    about.style.display ="block"
    about.innerHTML = `
        <div class="justify-content-center text-center"><img src="./img/img.png" alt="mi-foto" title="Cándido y Sif, en orden de izquierda a derecha" class="imgmia mb-3"></div>
        <div class="texto ">
          <p>Soy un apasionado de la lectura, los animales  y la tecnología, también soy una persona curiosa y con muchas ganas de entender el funcionamiento de las cosas, lo que me hace estar en constante aprendizaje, proceso que disfruto al máximo.</p>
          <p>Tras varios vaivenes, terminé estudiando  lo que me gustaba desde un principio que era el ciclo superior de desarrollo de aplicaciones web. 
            Ahora una vez terminado el ciclo mi objetivo es buscar la posibilidad de acceder a un puesto que me permita poner en funcionamiento las habilidades obtenidas en 
            programación desarrollando software que sea útil en el día a día, sino también poder exprimir al máximo mis ganas de aprender cosas nuevas 
            y junto con las ganas de asumir de forma profesional retos que me permitan seguir avanzando.</p>
        </div>
      <div class="conocimientos text-center">
        <p>Actualmente y gracias al ciclo y los cursos autodidactas, he usado las siguientes tecnologias, pudiendo ver los usos en mis <a onclick="mostrarProyect()"><strong>proyectos</strong></a></p>
        <div class="ico-cono " style="display: inline;">
          <div class="lenguajes mb-3">
            <p>Lenguajes</p>
            <i title="HTML-5" class="me-4 fa-brands fa-html5"></i>
            <i title="CSS" class="me-4 fa-brands fa-css3-alt"></i>
            <i title="JavaScript" class="me-4 fa-brands fa-js"></i>
            <i title="Python" class="me-4 fa-brands fa-python"></i>
            <i title="PHP" class="me-4 fa-brands fa-php"></i>
            <i title="Java" class="me-4 fa-brands fa-java"></i>
          </div>
          <div class="frameworks mb-3">
            <p>Frameworks y librerias</p>
            <i title="Bootstrap" class="me-4 fa-brands fa-bootstrap"></i>
            <i title="Laravel" class="me-4 fa-brands fa-laravel"></i>
          </div>
          <p>Puedes revisar mi curriculum aqui</p>
          <a href="./cv/cv_candidonpv.pdf" class="cv" id="cv" target="_blank"><i class="fa-solid fa-file-pdf"></i></a>
        </div>
      </div>
       `;
}
const mostrarProyect = ()=>{
    borrar();
    proyect.style.display ="block"
    proyect.innerHTML = `
<p>Por ahora solo tengo un proyecto propio, que estoy llevando a su versión web creando una API con los datos a mostrar</p>
<div class="row">
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/propio/xus4me.png" title="Xus4me"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Propios/Xus4me" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                  </div>
<p>Los demás proyectos son los creados en clase, ya siendo exámenes o trabajos y los creados haciendo cursos en internet</p>
<p>Proyectos creados en DAW</p>
<div class="row">
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/daw/cargarApi.png" title="Usar API"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/2o-a%C3%B1o/Consumir-Api" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/daw/crearApi.png" title="Crear API"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/2o-a%C3%B1o/Crear-ApiRest" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/daw/filament.png" title="Dashboard"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/2o-a%C3%B1o/Dashboard-filament" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/daw/proyectoBase.png" title="Crud puro PHP"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/1er-a%C3%B1o/proyectoBasePHP" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/daw/swingJava.png" title="Interfaz visual de Java"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/1er-a%C3%B1o/proyectoSwing/proyectoSwing" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                  </div>
                  <p>Proyectos creados con cursos online</p>
                  <div class="row">
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/udemy/bootstrap.png" title="Uso de Bootstrap"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/Practica-Bootstrap" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/udemy/galeria.png" title="Galeria de imágenes"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/proyecto-Galeria" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/udemy/portafolio.png" title="Ejemplo Portfolio"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/Practica-Portafolio" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/udemy/restaurante.png" title="Ejemplo Restaurante"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/Practica-Restaurante" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                    <div class="image"> 
                      <img class="imgproye" src="./img/proyectos/udemy/startup.png" title="Ejemplo para Startup"> 
                      <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/Practica-Startup" target="_blank">
                        <i class="proyect fa-solid fa-link"></i>
                      </a> 
                    </div>
                  </div>
                  <p>para ver todos los proyectos que hay en el repositorio puedes acceder desde <a href="https://github.com/Kanosk/Proyectos/tree/main" target="_blank">aquí</a></p>

    `;
}
const mostrarContact = ()=>{
    borrar();
    contact.style.display ="block"
    contact.innerHTML = `
    <h4><p class="text-center">Puedes ponerte en contacto conmigo de las siguientes maneras</p></h4>
              <div class="container redes-sociales">
                <div class="contenedor-contacto ">
                <a title="Correo" href="mailto:candidonpv@gmail.com?subject=Correo desde candidonpv.github.io" class="mail red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa-solid fa-envelope-open-text"></i></a>
                <a title="LinkedIn" href="https://www.linkedin.com/in/candido-nicolas-perez-verwer-971855220/" class="linkedin red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a title="Github" href="https://github.com/Kanosk" class="github red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa fa-github"></i></a>
                <a title="Twitter / X" href="https://twitter.com/kanosk44" class="twitter red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
              </div>
              </div>
  `;
}



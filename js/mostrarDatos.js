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
    <div class="row">
                <div class="col-md-8 order-md-1 ">
                    <div class="intro mt-5">
                        <h2>Hola, Soy Cándido</h2>
                        <h3>Bienvenido a mi porfolio como desarrollador junior</h3>
                    </div>
                </div>
                <div class="col-md-3 order-md-2">
                    <img src="./img/img.png" alt="mi-foto" title="Cándido y Sif, en orden de izquierda a derecha" class="imgmia mb-3 mt-2">
                </div>
            </div>
    `;
}

const mostrarAbout = ()=>{
    borrar();
    about.style.display ="block"
    about.innerHTML = `
        
    <div class="texto ">
    <h2>¿Quién soy?</h2>
    <p>Soy un apasionado de la lectura, los animales y la tecnología, también una persona curiosa y con muchas ganas de entender el funcionamiento de las cosas, 
      lo que me hace estar en constante aprendizaje, proceso que disfruto al máximo.</p>
    <p>Tras estudiar derecho durante un par de años y comprobar que no era lo que me apasionaba, 
      terminé estudiando lo que me gustaba desde un principio, la informática. 
      Empecé con ciclo de Sistemas Microinformáticos y Redes para posteriormente decantarme por el ciclo Superior de Desarrollo de Aplicaciones Web. 
      Ahora una vez terminado, mi objetivo es buscar la oportunidad de crecer en un puesto que me permita no solo poner en funcionamiento 
      las habilidades obtenidas en programación, pudiendo desarrollar software que sea útil para el día a día, sino también poder aprovechar 
      al máximo mi curiosidad, mis ganas de aprender y enfrentar en buena compañía los retos que aparezcan para seguir avanzando.</p>
    <h2>Formación</h2>
  <br>
    <h3 >Reglada</h3>
    <ul >
      <li>• 2022/Actualidad --- Ciclo Superior Desarrollo Aplicaciones Web</li>
      <li>•	2015/2017 --- Ciclo Sistemas Microinformáticos y Redes</li>
      <li>•	2009/ 2011 ---- Bachillerato  </li>
    </ul>
    <h3 >No reglada</h3>
    <ul >
      <li>•	Introducción al desarrollo web I --- Google Actívate</li>
      <li>•	Introducción al desarrollo web II --- Google Actívate</li>
      <li>•	Diseño Web Profesional ---- Udemy</li>
    </ul>
    <p >Sin contar estos dos cursos que ya he finalizado, también estoy realizando de manera online</p>
    <ul >
      <li>•	Introducción a Python ---- Microsoft Learn</li>
      <li>•	Desarrollo móvil para IOS y Swift ----- Udemy</li>
    </ul>
  </div>
<div class="conocimientos text-center">
  <p>Además, actualmente y gracias al ciclo y los cursos autodidactas, he usado las siguientes tecnologias, pudiendo ver los usos en mis <a onclick="mostrarProyect()"><strong>proyectos</strong></a></p>
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
    <div class="texto">
      <h2>Experiencia profesional</h2>
      <p>A continuación, pondré de forma breve mi experiencia antes de apuntarme a estudiar programación. </p>
    <ul >
      <li>•	2020-2022 --- MediaMarkt Online Canarias</li>
      <li>•	2017-2020 --- MediaMarkt Alisios</li>
      <li>•	2010-2017 --- Transportes Turísticos Islas Canarias</li>
    </ul>
    </div>
    <p>Puedes revisar mi curriculum aqui</p>
    <a href="./cv/cv_candidonpv.pdf" class="cv" id="cv" target="_blank" title="CV">${getPdfIcon()}</i></a>
    
    
  </div>
</div>
       `;
}

const getPdfIcon = () => {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const pdfIcon = currentTheme === 'dark' ? '<i class="fa-regular fa-file-pdf"></i>' : '<i class="fa-solid fa-file-pdf"></i>';
  return pdfIcon;
};

const mostrarProyect = ()=>{
    borrar();
    proyect.style.display ="block"
    proyect.innerHTML = `
    <div class=" text-center">
                 <p>Por ahora solo tengo un proyecto propio, que estoy llevando a su versión web creando una API con los datos a mostrar</p>
                 <div class="row justify-content-center">
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/propio/xus4me.png" title="Xus4me" >
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Propios/Xus4me" target="_blank" aria-label="xus4me">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                    </div>
                 <p>Los demás proyectos son los creados en clase, ya siendo exámenes o trabajos y los creados haciendo cursos en internet</p>
                 <p class="title">Proyectos creados en DAW</p>
                 <div class="row justify-content-center">
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/daw/cargarApi.png" title="Usar API">
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/2o-a%C3%B1o/Consumir-Api" target="_blank" aria-label="Usar API">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/daw/filament.png" title="Dashboard">
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/2o-a%C3%B1o/Dashboard-filament" target="_blank" aria-label="Dashboard">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/daw/proyectoBase.png" title="Crud puro PHP">
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/1er-a%C3%B1o/proyectoBasePHP" target="_blank" aria-label="Crud en PHP">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/daw/swingJava.png" title="Interfaz visual de Java">
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/DAW/1er-a%C3%B1o/proyectoSwing/proyectoSwing" target="_blank" aria-label="Java Swing">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                    </div>
                    <p class="title">Proyectos creados con cursos online</p>
                    <div class="row justify-content-center">
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/udemy/bootstrap.png" title="Uso de Bootstrap">
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/Practica-Bootstrap" target="_blank" aria-label="Bootstrap">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/udemy/galeria.png" title="Galeria de imágenes">
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/proyecto-Galeria" target="_blank" aria-label="Galeria">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/udemy/portafolio.png" title="Ejemplo Portfolio">
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/Practica-Portafolio" target="_blank" aria-label="Portafolio">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                      <div class="image">
                        <img class="imgproye" src="./img/proyectos/udemy/restaurante.png" title="Ejemplo Restaurante">
                        <a href="https://github.com/Kanosk/Proyectos/tree/main/Realizados%20en%20cursos/Udemy/Practica-Restaurante" target="_blank" aria-label="Restaurante">
                          <i class="proyect fa-solid fa-link"></i>
                        </a>
                      </div>
                    </div>
                    <p class="title">Puedes ver mas en el repositorio <br>
                      <a href="https://github.com/Kanosk/Proyectos/tree/main" target="_blank" class="ico" aria-label="Repositorio"><i class="fa-brands fa-github"></i></a></p>
               </div>
    `;
}

const mostrarContact = ()=>{
    borrar();
    contact.style.display ="block"
    contact.innerHTML = `
    <h2><p class="text-center">Puedes ponerte en contacto conmigo de las siguientes maneras</p></h2>
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



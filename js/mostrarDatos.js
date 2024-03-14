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
    <div class="row text-center">
                <div class="col-md-8 order-md-1 ">
                    <div class="intro mt-5">
                        <h2>Hola, Soy <span>Cándido</span></h2>
                        <h3>Bienvenido a mi porfolio como <span>desarrollador junior</span></h3>
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
    <h2><span>¿Quién soy?</span></h2>
    <p>Soy un apasionado de la lectura, los animales y la tecnología, también una persona curiosa y con muchas ganas de entender el funcionamiento de las cosas, 
      lo que me hace estar en constante aprendizaje, proceso que disfruto al máximo.</p>
    <p>Tras estudiar derecho durante un par de años y comprobar que no era lo que me apasionaba, 
      terminé estudiando lo que me gustaba desde un principio, la informática. 
      Empecé con ciclo de Sistemas Microinformáticos y Redes para posteriormente decantarme por el ciclo Superior de Desarrollo de Aplicaciones Web. 
      Ahora una vez terminado, mi objetivo es buscar la oportunidad de crecer en un puesto que me permita no solo poner en funcionamiento 
      las habilidades obtenidas en programación, pudiendo desarrollar software que sea útil para el día a día, sino también poder aprovechar 
      al máximo mi curiosidad, mis ganas de aprender y enfrentar en buena compañía los retos que aparezcan para seguir avanzando.</p>
      <h2><strong>Formación</strong></h2>
      <div class="row mt-3 mb-3">
        <div class="col-sm-12 col-md-6">
          <h3><span>Reglada</span></h3>
          <ul>
            <li>• 2022/Actualidad --- Ciclo Superior Desarrollo Aplicaciones Web</li>
            <li>•	2015/2017 --- Ciclo Sistemas Microinformáticos y Redes</li>
            <li>•	2009/ 2011 ---- Bachillerato  </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6">
          <h3><span>No reglada</span></h3>
          <ul>
            <li>•	Introducción al desarrollo web I --- Google Actívate</li>
            <li>•	Introducción al desarrollo web II --- Google Actívate</li>
            <li>•	Diseño Web Profesional ---- Udemy</li>
          </ul>
        </div>
      </div>
    <p >Sin contar con la formación que ya he finalizado, también estoy realizando de manera online</p>
    <ul >
      <li>•	Introducción a Python ---- Microsoft Learn</li>
      <li>•	Desarrollo móvil para IOS y Swift ----- Udemy</li>
    </ul>
  </div>
<div class="conocimientos text-center">
  <p>Además, actualmente y gracias al ciclo y los cursos autodidactas, he usado las siguientes <span>tecnologias</span>, pudiendo ver los usos en mis <a onclick="mostrarProyect()"><strong class="ruta">proyectos</strong></a></p>
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
    <p>Puedes revisar mi curriculum aquí</p>
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
  proyect.innerHTML=`
  <div class="text-center">
  <p>Por ahora solo tengo un proyecto propio, el cual estoy llevando a su versión web</p>
  <p>Los demás proyectos son los creados en clase o haciendo cursos por mi cuenta</p>
  </div>
  <div class="row justify-content-center" id='cargaPro'></div>
  `;
  let cargaCard = document.getElementById('cargaPro');
  proyectos.forEach((proyecto)=>{
    const nuevoProyecto=document.createElement('div');
    const plantilla=`
    <div class="card-container">
    <div class="card-face front-face">
      <img src="${proyecto.foto}" alt="${proyecto.nombre}" class="mb-2"/>
      <h2><span>${proyecto.nombre}</span></h2>
      <p class="muted">${proyecto.idioma}</p>
    </div>
    <div class="card-face back-face">
      <div class="container-about">
        <span>
          <h3>De qué va</h3>
        </span>
        <p class="protxt text-center">${proyecto.sobrePro}</p>
        <div class="row">
          <a href="${proyecto.enlace}" target="_blank"><i class="fa-solid fa-link" title="${proyecto.nombre}"></i></a>
        </div>
      </div>
      </div>
  </div>
    `;
    nuevoProyecto.classList.add('card');
    nuevoProyecto.classList.add('mt-2');
    nuevoProyecto.classList.add('me-2');
    nuevoProyecto.innerHTML=plantilla;
    cargaCard.append(nuevoProyecto);
});
  
}

const mostrarContact = ()=>{
    borrar();
    contact.style.display ="block"
    contact.innerHTML = `
    <h2><p class="text-center">Puedes ponerte en contacto <span>conmigo</span> de las siguientes maneras</p></h2>
              <div class="container redes-sociales">
                <div class="contenedor-contacto text-center">
                <a title="Correo" href="mailto:candidonpv@gmail.com?subject=Correo desde candidonpv.github.io" class="mail red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa-solid fa-envelope-open-text"></i></a>
                <a title="LinkedIn" href="https://www.linkedin.com/in/candido-nicolas-perez-verwer-971855220/" class="linkedin red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a title="Github" href="https://github.com/Kanosk" class="github red col-6 col-sm-4 col-md-2 " target="_blank"><i class="fa fa-github"></i></a>
              </div>
              </div>
  `;
}



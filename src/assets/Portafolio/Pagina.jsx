import './Pagina.css';
import React from 'react';

function Portfolio() {
  return (
    <div>
      <header>
        <h1>Mi Portafolio</h1>
        <nav>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Repositorios primer corte</a>
          <a href="#projects2">Repositorios segundo corte</a>
          <a href="#gitignore">Gitignore</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <section id="about">
        <img src="/imagenes/foto.PNG" alt="Mi Foto" />
        <div className="description">
          <h2>Sobre mí</h2>
          <p>
            Soy un estudiante de ingeniería multimedia con habilidades en la
            creación de páginas web con HTML y CSS. Además, tengo conocimientos
            en la creación de modelos 3D utilizando Blender, lo que me convierte
            en un desarrollador multidisciplinario.
          </p>
        </div>
      </section>

      <section id="skills">
        <h2>Habilidades</h2>
        <div className="skills-section">
          <div className="hard-skills">
            <h3>Habilidades duras</h3>
            <ul>
              <li><i className="fas fa-code"></i> HTML & CSS</li>
              <li><i className="fas fa-js-square"></i> JavaScript</li>
              <li><i className="fas fa-cubes"></i> Blender</li>
              <li><i className="fas fa-network-wired"></i> Cisco Packet Tracer</li>
            </ul>
          </div>
          <div className="soft-skills">
            <h3>Habilidades blandas</h3>
            <ul>
              <li><i className="fas fa-comments"></i> Comunicación efectiva</li>
              <li><i className="fas fa-users"></i> Trabajo en equipo</li>
              <li><i className="fas fa-brain"></i> Respuesta al estrés</li>
              <li><i className="fas fa-clock"></i> Gestión del tiempo</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Repositorios primer corte</h2>
        <div className="proyecto">
          <div className="proyecto-texto">
            <h3>
              <a
                href="https://github.com/MarcoAChaparro/Actividad1"
                target="_blank"
                className="proyecto-link"
                rel="noopener noreferrer"
              >
                Trabajo HTML-CSS básico
              </a>
            </h3>
            <p>
              Este proyecto consistió en la creación de una página web sencilla utilizando HTML y CSS, familiarizándose con Visual Studio Code.
            </p>
          </div>
        </div>
        <div className="proyecto">
          <div className="proyecto-texto">
            <h3>
               <a
                 href="https://github.com/juansteban08/ProyectoDise-oWeb.git"
                 target="_blank"
                 className="proyecto-link"
                 rel="noopener noreferrer"              
               >
              Proyecto de clase
              </a>
            </h3>
            <p>
              Pagina web centrada para encontrar recetas fitness para un publico en especifico.
            </p>
          </div>
        </div>
      </section>

      <section id="projects2">
        <h2>Repositorios segundo corte</h2>
        <div className="proyecto">
          <div className="proyecto-texto">
            <h3>
              <a
                href="https://github.com/MarcoAChaparro/primer-proyecto-react.git"
                target="_blank"
                className="proyecto-link"
                rel="noopener noreferrer"
              >
                Primer Proyecto React
              </a>
            </h3>
            <p>
              En este proyecto, se introdujo React con un ejercicio de contador básico usando componentes y eventos.
            </p>
          </div>
        </div>
        <div className="proyecto">
          <div className="proyecto-texto">
            <h3>
              <a
                href="https://github.com/MarcoAChaparro/ClaseVirtual.git"
                target="_blank"
                className="proyecto-link"
                rel="noopener noreferrer"
              >
                Clase Virtual
              </a>
            </h3>
            <p>
              Uso de JavaScript en la interacción con la interfaz web para mejorar la experiencia del usuario en un entorno virtual.
            </p>
          </div>
        </div>
        <div className="proyecto">
          <div className="proyecto-texto">
            <h3>
              <a
                href="https://github.com/MarcoAChaparro/ActividadJs.git"
                target="_blank"
                className="proyecto-link"
                rel="noopener noreferrer"
              >
                Actividad JavaScript
              </a>
            </h3>
            <p>
              Elaboración de un comparador de números en JavaScript para determinar cuál es el menor y manejar casos de números iguales.
            </p>
          </div>
        </div>
        <div className="proyecto">
          <div className="proyecto-texto">
            <h3>
              <a
                href="https://github.com/MarcoAChaparro/Clase10_React.git"
                target="_blank"
                className="proyecto-link"
                rel="noopener noreferrer"
              >
                Clase 10 React
              </a>
            </h3>
            <p>
              En esta clase, se manejaron archivos `.jsx` y `.css` en un proyecto React con componentes modulares y estados.
            </p>
          </div>
        </div>
      </section>

      <section id="gitignore">
        <h2>Eliminar archivos con gitignore</h2>
        <h3>Paso 1: Crea o edita el archivo .gitignore</h3>
        <p>
          El archivo .gitignore le indica a Git qué archivos o carpetas debe ignorar. Puedes crearlo en la raíz de tu proyecto o editarlo si ya existe.
        </p>

        <h3>Paso 2: Agrega las rutas o nombres de los archivos/carpetas a ignorar</h3>
        <p>
          Dentro del archivo .gitignore, escribe el nombre o la ruta de los archivos o carpetas que ya no quieres rastrear. Ejemplos:
        </p>
        <code>
          /ruta/al/archivo.txt  
          /carpeta/*
        </code>

        <h3>Paso 3: Elimina los archivos de Git sin borrarlos del disco</h3>
        <p>
          Para eliminar los archivos que ya no quieres rastrear sin eliminarlos de tu sistema local, ejecuta el siguiente comando en tu terminal:
        </p>
        <code>git rm --cached archivo.txt</code>

        <h3>Paso 4: Confirma los cambios</h3>
        <p>
          Después de eliminar los archivos del seguimiento de Git, confirma los cambios con el siguiente comando:
        </p>
        <code>git commit -m "Dejar de rastrear archivo(s)"</code>

        <h3>Paso 5: Verifica y sube los cambios al repositorio remoto</h3>
        <p>
          Verifica que los archivos se estén ignorando correctamente y luego sube los cambios a tu repositorio remoto:
        </p>
        <code>git push origin main</code>
      </section>

      <footer>
        <h2>Contacto</h2>
        <div className="redes-icon">
          <a href="https://www.instagram.com/marco__chaparro/" target="_blank" rel="noopener noreferrer">
            <img src="/imagenes/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/marcoantonio.chaparromorales?locale=es_LA" target="_blank" rel="noopener noreferrer">
            <img src="/imagenes/facebook.png" alt="Facebook" />
          </a>
          <a href="https://github.com/MarcoChaparro" target="_blank" rel="noopener noreferrer">
            <img src="/imagenes/github.png" alt="GitHub" />
          </a>
        </div>
        <p>© 2024 Marco Chaparro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Portfolio;

# Mi Portafolio Personal

Este proyecto es una página web creada con **React** que presenta un portafolio personal. A lo largo de esta página se muestra información sobre mí, mis habilidades, proyectos en los que he trabajado, y mis formas de contacto. Utiliza **HTML**, **CSS** y **JavaScript** dentro del entorno de React, permitiendo una estructura modular que facilita la organización del código.

## Estructura del Proyecto

El código está dividido en dos archivos principales:

- **`Pagina.jsx`**: Este archivo contiene la estructura principal de la página en React. Aquí se definen los componentes y el contenido de cada sección del portafolio asi como la estructura basica a manejar.
- **`Pagina.css`**: Este archivo define los estilos que se aplican a cada sección de la página, incluyendo fuentes, colores, diseño de las tarjetas de proyectos y el footer.

---

## Contenido de la Página

### 1. **Sección de "Sobre mí"**:
   - En esta sección se incluye una foto personal (`<img>`) y una breve descripción sobre mi perfil académico y profesional. Se muestran mis conocimientos en desarrollo web y otros campos como la creación de modelos 3D.
   - **Clave en el código (`Pagina.jsx`)**:
     ```jsx
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
     ```

### 2. **Sección de "Habilidades"**:
   - Aquí se listan tanto habilidades técnicas como "habilidades blandas". Estas habilidades están organizadas en dos columnas utilizando flexbox en el archivo CSS.
   - **Clave en el código (`Pagina.jsx`)**:
     ```jsx
     <section id="skills">
       <h2>Habilidades</h2>
       <div className="skills-section">
         <div className="hard-skills">
           <h3>Habilidades duras</h3>
           <ul>
             <li><i className="fas fa-code"></i> HTML & CSS</li>
             <li><i className="fas fa-js-square"></i> JavaScript</li>
             <li><i className="fas fa-cubes"></i> Blender</li>
           </ul>
         </div>
         <div className="soft-skills">
           <h3>Habilidades blandas</h3>
           <ul>
             <li><i className="fas fa-comments"></i> Comunicación efectiva</li>
           </ul>
         </div>
       </div>
     </section>
     ```
   - **Clave en el código (`Pagina.css`)**:
     ```css
     .skills-section {
         display: flex;
         justify-content: space-around;
         flex-wrap: wrap;
     }

     ul li i {
         margin-right: 10px; /* Añade espacio entre el ícono y el texto */
         color: #0077b6; /* Colorea los íconos */
     }
     ```

### 3. **Sección de "Proyectos" (Repositorios de GitHub)**:
   - Esta sección muestra proyectos que he trabajado organizados en dos cortes, o grupos. Cada proyecto tiene un enlace a un repositorio en GitHub, con una breve descripción.
   - **Clave en el código (`Pagina.jsx`)**:
     ```jsx
     <section id="projects">
       <h2>Repositorios primer corte</h2>
       <div className="proyecto">
         <h3><a href="https://github.com/MarcoAChaparro/Actividad1">Trabajo HTML-CSS básico</a></h3>
         <p>Descripción del proyecto.</p>
       </div>
     </section>
     ```

   - **Clave en el código (`Pagina.css`)**:
     ```css
     .proyecto {
         background-color: #fff;
         padding: 20px;
         border-radius: 10px;
         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
         transition: transform 0.3s ease;
         margin-bottom: 30px;
     }

     .proyecto:hover {
         transform: translateY(-5px); /* Efecto hover para mover la tarjeta */
     }
     ```

### 4. **Sección de "Gitignore"**:
   - Aquí se explica cómo utilizar un archivo `.gitignore` para evitar que ciertos archivos sean seguidos por Git. Esta sección usa un estilo similar a un bloque de código para mostrar los comandos.
   - **Clave en el código (`Pagina.jsx`)**:
     ```jsx
     <section id="gitignore">
       <h2>Eliminar archivos con gitignore</h2>
       <p>El archivo .gitignore le indica a Git qué archivos o carpetas debe ignorar.</p>
       <code>/ruta/al/archivo.txt  /carpeta/*</code>
     </section>
     ```

   - **Clave en el código (`Pagina.css`)**:
     ```css
     #gitignore pre {
         background-color: #f4f4f4;
         padding: 15px;
         border-radius: 5px;
         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
     }
     ```

### 5. **Footer (Contacto)**:
   - El footer incluye enlaces a mis redes sociales (Instagram, Facebook y GitHub), junto con un breve mensaje de derechos reservados.
   - **Clave en el código (`Pagina.jsx`)**:
     ```jsx
     <footer>
       <h2>Contacto</h2>
       <div className="redes-icon">
         <a href="https://www.instagram.com/marco__chaparro/" target="_blank">
           <img src="/imagenes/instagram.png" alt="Instagram" />
         </a>
       </div>
       <p>© 2024 Marco Chaparro. Todos los derechos reservados.</p>
     </footer>
     ```

   - **Clave en el código (`Pagina.css`)**:
     ```css
     footer {
         background-color: #0077b6;
         color: white;
         padding: 40px 20px;
         text-align: center;
         margin-top: 50px;
     }

     .redes-icon img {
         width: 50px;
         height: 50px;
         transition: transform 0.3s ease;
     }

     .redes-icon img:hover {
         transform: scale(1.1);
         filter: brightness(1.1);
     }
     ```

---

## Claves del Diseño en CSS

1. **Flexbox**: Se usa `flexbox` para alinear las secciones de habilidades y proyectos de forma responsiva, asegurando que los elementos se distribuyan de manera adecuada en diferentes tamaños de pantalla.
2. **Efectos Hover**: Hay varios efectos de hover (como en los proyectos y los íconos de redes sociales) que mejoran la experiencia del usuario, agregando interactividad sin recargar la página.
3. **Tipografía**: Se utiliza la fuente `Poppins` desde Google Fonts, dándole un aspecto moderno y limpio a la página.

---


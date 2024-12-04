🐾 Proyecto de Adopción de Mascotas

Este repositorio contiene el backend de una plataforma destinada a facilitar la adopción responsable de mascotas, conectando refugios con posibles adoptantes.

📖 Descripción

El objetivo principal del proyecto es:

Proporcionar una API que gestione la información de mascotas disponibles para adopción.

Facilitar la conexión entre refugios y adoptantes mediante funcionalidades específicas.

Promover la tenencia responsable de mascotas a través de recursos educativos.

🚀 Funcionalidades

Gestión de mascotas: CRUD (Crear, Leer, Actualizar, Eliminar) de información de mascotas disponibles para adopción.

Gestión de usuarios: Administración de datos de usuarios interesados en adoptar.

Solicitudes de adopción: Permite a los usuarios enviar y gestionar solicitudes para adoptar mascotas.

Recursos educativos: Proporciona información y consejos sobre la adopción y cuidado responsable de mascotas.

🛠️ Tecnologías Utilizadas

Backend: Node.js con Express.js

Base de datos: MongoDB

Autenticación: JWT (JSON Web Tokens)

Contenedorización: Docker

📂 Estructura del Proyecto

📦 adopcion-mascotas-backend

├── 📁 src

│   ├── 📁 config          # Configuraciones y variables de entorno

│   ├── 📁 controllers     # Controladores de la lógica de negocio

│   ├── 📁 middlewares     # Middlewares para el manejo de peticiones

│   ├── 📁 models          # Modelos de datos y esquemas de la base de datos

│   ├── 📁 routes          # Definición de rutas de la API

│   ├── 📁 services        # Servicios con la lógica de negocio

│   ├── 📁 utils           # Funciones utilitarias y helpers

│   └── app.js             # Punto de entrada de la aplicación

├── .dockerignore          # Archivos y carpetas ignorados por Docker

├── .env                   # Variables de entorno

├── .gitignore             # Archivos y carpetas ignorados por Git

├── Dockerfile             # Configuración de Docker

├── README.md              # Documentación del proyecto

├── package-lock.json      # Dependencias específicas del proyecto

└── package.json           # Información y dependencias del proyecto

🌟 Cómo Contribuir

Realiza un fork de este repositorio.

Crea una nueva rama para tu funcionalidad o corrección: git checkout -b feature/nueva-funcionalidad.

Implementa tus cambios y asegúrate de que las pruebas se ejecuten correctamente.

Realiza un commit de tus cambios: git commit -m "Agrega nueva funcionalidad".

Sube tus cambios al repositorio remoto: git push origin feature/nueva-funcionalidad.

Abre un Pull Request detallando tus modificaciones.

🐕 Cómo Ejecutar el Proyecto Localmente

Clona este repositorio:

git clone https://github.com/Edca33/Entrega-final-back3.git

cd Entrega-final-back3

Configura las variables de entorno necesarias en el archivo .env.

Instala las dependencias del proyecto:

npm install

Inicia el servidor:

npm start

El backend estará disponible en http://localhost:8080.

Link de la imagen de docker: https://hub.docker.com/repository/docker/edpump65/test/general

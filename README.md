# Mynewapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Características Principales

Esta aplicación es un directorio interactivo de GitHub desarrollado para la evaluación Parcial MISW4104. Sus características incluyen:

*   **Directorio de Usuarios:** Módulo maestro-detalle (mediante componentes) para explorar una lista de desarrolladores, visualizar sus avatares, roles, habilidades tecnológicas y acceder a su perfil detallado con métricas clave.
*   **Explorador de Repositorios:** Módulo maestro-detalle (mediante URLs dinámicas) para navegar por una colección de repositorios, visualizando información sobre el lenguaje principal, estrellas, descripción y los detalles de sus contribuidores u owner.
*   **Búsqueda Global en Tiempo Real:** Barra de búsqueda integrada y persistente que filtra dinámicamente tanto las listas de usuarios como las de repositorios en tiempo real usando un `BehaviorSubject`.
*   **Diseño Moderno (UI/UX):** Interfaz fluida y responsiva de alta calidad (calidad mockup) con tarjetas estilizadas, etiquetas dinámicas y diseño *glassmorphism* adaptado.
*   **Consumo de API Externa:** Los datos son cargados de manera asíncrona mediante el `HttpClient` de Angular desde endpoints JSON proporcionados.
## Servidor de desarrollo

Ejecuta `npm start` (o `npx ng serve`) para iniciar un servidor de desarrollo local. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

> **Nota:** Este proyecto requiere **Node.js 18 o 20**. Si tienes una versión más reciente (ej. Node 24) y el comando `ng` no es reconocido o lanza errores, utiliza `npx ng serve` en su lugar, o cambia a una versión de Node soportada usando [nvm](https://github.com/coreybutler/nvm-windows).

## Generación de código

Ejecuta `npx ng generate component nombre-componente` para generar un nuevo componente. También puedes usar `npx ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción (Build)

Ejecuta `npm run build` (o `npx ng build`) para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `npx ng test` para ejecutar las pruebas unitarias usando [Karma](https://karma-runner.github.io).

## Ejecución de pruebas end-to-end (e2e)

Ejecuta `npx ng e2e` para ejecutar las pruebas de integración (end-to-end) a través de la plataforma de tu elección. Para usar este comando, primero necesitas añadir un paquete que implemente estas capacidades de prueba.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, utiliza `npx ng help` o visita la página [Angular CLI Overview and Command Reference](https://angular.io/cli).

# backend_ota

# OTA Bilbao - Sistema de Aparcamiento de Pago

## Descripción del Proyecto

OTA Bilbao es un proyecto de backend centrado en la gestión y optimización del estacionamiento en la ciudad de Bilbao. La aplicación proporciona funcionalidades específicas para mejorar la experiencia de estacionamiento en la ciudad.

## Características Principales

### Gestión de Aparcamiento

- **Reserva de Plazas:** Permite a los usuarios reservar plazas de aparcamiento en zonas específicas de la ciudad, con fecha de inicio y finalización.
- **Información en Tiempo Real:** Proporciona información en tiempo real sobre su aparcamiento activo o no.

### Pagos y Tarifas

- **Pago:** Facilita el pago del estacionamiento a través de la aplicación y las tarifas según las diferentes zonas.

### Generador de multas

- **Multas:** Se generarán multas cuando el tiempo de estacionamiento abonado se supere.

### Historial y Estadísticas

- **Historial de Estacionamiento:** Mantiene un registro del historial de estacionamiento de los usuarios, incluyendo zonas y duración.

### Admin

- **Posibilidad de Eliminar Multas:** Permite al administrador eliminar multas y ofrece visibilidad de los diferentes vehículos registrados en la app.

## Uso del Proyecto

1. **Clona este Repositorio:**
   ```bash
   git clone git@github.com:Vtorcampos13/backend_ota.git
Configura las Variables de Entorno:

Crea un archivo .env en la raíz del proyecto.
Completa las variables de entorno con la información necesaria.

Inicializa la Aplicación Utilizando Docker Compose:
docker-compose up --build

Instala las Dependencias:
npm install

Ejecuta la Aplicación:
npm start

Accede a la Aplicación a través del Navegador:
http://localhost:3008

Contribución
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, abre un pull request y colabora en el desarrollo de una experiencia de estacionamiento más eficiente y amigable para los residentes y visitantes de Bilbao.

¡Disfruta optimizando el aparcamiento y haciendo que la movilidad en la ciudad sea más cómoda con OTA Bilbao!

# web3

npm install vue-router axios pinia vue-i18n primevue primeflex primeicons
npm install @primevue/themes
npm i @primeuix/themes
npm install -g json-server@0.17.4
npm install @primevue/themes

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).


shared/infrastructure/base-api.js: La configuración de Axios y la inyección de la variable de entorno .env nunca cambia.

locales/i18n.js: La configuración base del idioma.

shared/presentation/components/language-switcher.vue: El botón selector de "EN/ES" es universal.

public/presentation/views/page-not-found.vue: La vista del error 404; a lo mucho le cambias una palabra en el JSON de idiomas, pero la lógica de enrutamiento y la alerta visual es la misma.

App.vue: El contenedor principal que solo aloja el Toolbar y el <router-view>.



🟡 2. Modificar Ligeramente (Plantillas repetitivas)
Estos archivos mantienen un 90% de la misma estructura. Tu trabajo aquí es un "buscar y reemplazar" para cambiar los nombres de las rutas, las variables o los endpoints.

main.js: La estructura de inicialización (Pinia, Router, i18n, Tema) es igual. Solo modificas qué componentes específicos de PrimeVue (Button, Card, Dropdown, DataTable) importas según lo que pida el PDF.

router/index.js: El patrón de redirección / a /home y la captura del 404 es idéntica. Solo debes tener cuidado de adaptar las child routes (rutas hijas) según los dominios que exija la rúbrica.

shared/presentation/components/toolbar.vue: La maquetación de PrimeVue (#start, #center, #end) no cambia. Solo cambias la URL del Logo de Logo.dev y los links a donde apuntan los botones.

Archivos *.api.js (Infraestructura): El patrón de la clase con métodos estáticos (http.get, http.post) es idéntico. Solo cambias el string de la URL (ej. pasas de '/countries' a '/incidents').

Archivos *.entity.js y *.assembler.js: La lógica del mapeo es idéntica. Solo cambias las propiedades de la clase para que calcen con los campos de tu db.json.

en.json y es.json: La estructura de llaves es la misma, solo cambias los textos y títulos para que coincidan con la temática.
## RUBRICA
Se le encarga el desarrollo de una aplicación web que implemente las siguientes características: 
● Un Toolbar, donde se muestra a la izquierda el logo de Travelocity (para ello utilice el servicio de 
Logo.dev API) y a continuación el texto “Travelocity Experience Management”. 
● En el Toolbar, al centro se muestra las opciones “Home”, “New Incident”. 
Página 2 de 7 
● El toolbar debe ofrecer además a la derecha de las opciones del toolbar, select buttons con “EN” 
y “ES” para el cambio de idioma. 
● La vista Home muestra como título el texto “Home” y como contenido el texto “We aspire to be 
the premier experience-driven travel company”. 
● Dentro de la vista Home se muestra también dos secciones: “Incident Analytics” y “Next Service 
Request”. 
● La sección con el título “Incident Analytics” presenta un grid list de tres componentes 
IncidentType por columna. Para cada Incident Type registrado debe presentarse un componente 
Incident Type Stats conteniendo un card. 
● En el componente Incident Type Stats, el card de Incident Type debe tener en la sección header 
el Incident Type. En la sección content deben estar dos indicadores estadísticos: Cost Per Hour y 
Accumulated Cost. En el footer del card debe aparecer Reported Incidents. 
● El indicador Cost Per Hour debe presentar la suma de costPerHour para los incidents registrados 
con status OPEN. 
● El indicador Accumulated Cost debe mostrar la sumatoria del total calculado en base a 
costPerHour (del destino asociado al incident) por la cantidad de horas transcurridas 
desde registeredAt hasta el momento (redondeado a valores enteros), para el total de 
incidents con estado OPEN, redondeado a dos decimales. 
● El indicador Reported Incidents muestra la cantidad de incidents generados para ese Incident 
Type. Si no hay incidents reportados entonces se indica 0 (cero). 
● La sección “Next Service Request” muestra un Card con la información del Service Request más 
antiguo con valor “HIGH” en su atributo priority. 
● La vista New Incident, muestra en la parte superior el título “New Incident” y debajo un subtítulo 
Add an Incident Record. 
● La vista New Incident, presenta un form para el ingreso de un Incident. Implemente una interfaz 
que permita al usuario especificar el destino y seleccionar el Incident Type. Considere que los 
atributos status y registeredAt no deben solicitarse en el form, sino poblarse automáticamente 
(status con valor OPEN y registeredAt con la fecha y hora actual) al momento de crear el registro. 
Ofrezca al usuario las acciones de Create y Cancel. La acción Create permite realizar el registro, 
mientras que Cancel descarta la acción. En ambos casos debe llevar al usuario a la vista principal. 
● Al momento de crear el incident record, debe, según el destino, generar automáticamente un 
Service Request considerando como neededAction el valor de defaultAction asociado al destino. 
● Solo se puede registrar para un Destination como máximo un elemento en /incidents por cada 
día. 
● Considere una vista de tipo page-not-found para el caso de rutas de navegación no soportadas. 
Dicha vista debe mostrar un mensaje incluyendo la ruta especificada que no se encontró y debe 
ofrecer un botón para retornar a Home. 
● La vista Home es accesible desde la ruta de navegación /home. 
● La vista New Incident es accesible desde la ruta de navegación /support/incidents/new. 
● La vista raíz (accesible desde la ruta de navegación /) debe redirigir al usuario a la vista /home. 
● La interfaz de usuario debe estar disponible en inglés y español, siendo inglés el idioma por 
defecto. 
● La interfaz de usuario debe utilizar uno de los cuatro presets de PrimeVue: Aura, Material, Lara o 
Nora. Utilice el preset con la mayor aproximación al design style del website de Travelocity. 
El equipo de IT de su cliente tomará en cuenta no solo el cumplimiento de las características funcionales, 
sino el diseño de interfaz de usuario, así como la estructura del proyecto, aplicación de convenciones de 
Página 3 de 7 
nomenclatura de objetos de programación en inglés, convenciones de nomenclatura de Vue.js, 
organización y eficiencia del código. Igualmente se tomará en cuenta la aplicación de patrones de diseño. 

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

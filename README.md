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
## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

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

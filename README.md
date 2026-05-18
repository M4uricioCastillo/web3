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

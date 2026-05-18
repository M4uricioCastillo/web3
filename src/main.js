import { createApp } from 'vue';
import App from './App.vue';
import router from "../router/index.js";

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import { createPinia } from 'pinia';
import i18n from "@/i18n.js";
import Card from 'primevue/card';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Dropdown from 'primevue/dropdown';
const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createPinia());
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'none'
        }
    }
});
app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-selectbutton', SelectButton);
app.component('pv-dropdown', Dropdown);
app.mount('#app');
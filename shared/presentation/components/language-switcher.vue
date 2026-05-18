<script setup>
/**
 * @summary Componente para alternar el idioma de la aplicación
 * @author Mauricio Castillo
 */
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const options = ref([
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' }
]);
const selectedLanguage = ref(locale.value);

watch(selectedLanguage, (newLang) => {
  if (newLang) locale.value = newLang;
});
</script>

<template>
  <pv-selectbutton
      v-model="selectedLanguage"
      :options="options"
      optionLabel="label"
      optionValue="value"
      :allowEmpty="false"
  />
</template>
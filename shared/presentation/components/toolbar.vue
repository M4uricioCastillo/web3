<script setup>

import { useRouter } from 'vue-router';
import LanguageSwitcher from './language-switcher.vue'; // Uso de kebab-case en import

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<template>
  <pv-toolbar class="mb-4 shadow-2">
    <template #start>
      <div class="flex align-items-center gap-2">
        <img src="https://img.logo.dev/travelocity.com?token=pk_Of_mY06WRL-Tv9yxZ4uv2A" alt="Travelocity Logo" height="40" />
        <span class="font-bold text-xl">{{ $t('toolbar.title') }}</span>
      </div>
    </template>

    <template #center>
      <div class="flex gap-3">
        <pv-button :label="$t('toolbar.home')" text plain @click="navigateTo('/home')" />
        <pv-button :label="$t('toolbar.newIncident')" text plain @click="navigateTo('/support/incidents/new')" />
      </div>
    </template>

    <template #end>
      <language-switcher />
    </template>
  </pv-toolbar>
</template>
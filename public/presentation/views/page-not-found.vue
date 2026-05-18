<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goHome = () => {
  router.push('/home');
};
</script>

<template>
  <div class="flex flex-column align-items-center justify-content-center mt-8">
    <i class="pi pi-exclamation-triangle text-red-500" style="font-size: 4rem"></i>
    <h1 class="text-4xl font-bold mt-4">{{ $t('notFound.title') }}</h1>

    <p class="text-xl text-600 mt-2">
      {{ $t('notFound.message') }} <strong class="text-900">{{ route.path }}</strong>
    </p>

    <pv-button :label="$t('notFound.returnBtn')" icon="pi pi-home" class="mt-4" @click="goHome" />
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  serviceRequest: {
    type: Object,
    required: false,
    default: null
  }
});
</script>

<template>
  <pv-card class="shadow-2 border-red-500 border-left-3">
    <template #title>
      <span class="text-xl font-bold text-900">Next Action Required</span>
    </template>

    <template #content>
      <div v-if="serviceRequest" class="flex flex-column gap-3 mt-2">
        <div class="flex align-items-center gap-2">
          <i class="pi pi-exclamation-circle text-red-500"></i>
          <span class="font-semibold">{{ $t('request.priority') }}:</span>
          <span class="font-bold text-red-500">{{ serviceRequest.priority }}</span>
        </div>

        <div class="flex align-items-center gap-2">
          <i class="pi pi-bolt text-primary"></i>
          <span class="font-semibold">{{ $t('request.action') }}:</span>
          <span>{{ serviceRequest.neededAction }}</span>
        </div>

        <div class="flex align-items-center gap-2">
          <i class="pi pi-calendar text-600"></i>
          <span class="font-semibold">{{ $t('request.date') }}:</span>
          <span class="text-600">{{ new Date(serviceRequest.registeredAt).toLocaleString() }}</span>
        </div>
      </div>

      <div v-else class="text-center p-4 text-500">
        <i class="pi pi-check-circle text-4xl mb-2 text-green-500"></i>
        <p class="m-0">{{ $t('request.none') }}</p>
      </div>
    </template>
  </pv-card>
</template>
<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  incidentType: { type: String, required: true },
  incidents: { type: Array, required: true },
  destinations: { type: Array, required: true }
});

// 1. Filtramos solo los incidentes OPEN
const openIncidents = computed(() => {
  return props.incidents.filter(inc => inc.status === 'OPEN');
});

// 2. Cálculo Analítico: Cost Per Hour (Suma simple con reduce)
const totalCostPerHour = computed(() => {
  return openIncidents.value.reduce((sum, incident) => {
    const destination = props.destinations.find(d => String(d.id) === String(incident.destinationId));
    return sum + (destination ? Number(destination.costPerHour) : 0);
  }, 0);
});

// 3. Cálculo Analítico Complejo: Accumulated Cost
const accumulatedCost = computed(() => {
  const total = openIncidents.value.reduce((sum, incident) => {
    const destination = props.destinations.find(d => String(d.id) === String(incident.destinationId));
    const cost = destination ? Number(destination.costPerHour) : 0;

    // Cálculo de horas transcurridas (milisegundos a horas, redondeado a entero como pide el PDF)
    const diffInMs = new Date() - new Date(incident.registeredAt);
    const hoursElapsed = Math.round(diffInMs / (1000 * 60 * 60));

    return sum + (cost * hoursElapsed);
  }, 0);

  // Retornamos redondeado a dos decimales
  return total.toFixed(2);
});

// 4. Incidentes Reportados (Total sin importar estado)
const reportedCount = computed(() => props.incidents.length);
</script>

<template>
  <pv-card class="h-full shadow-2">
    <template #title>
      <span class="text-xl font-bold">{{ incidentType }}</span>
    </template>

    <template #content>
      <div class="flex flex-column gap-3 mt-3">
        <div class="flex justify-content-between align-items-center">
          <span class="font-semibold text-600">{{ $t('stats.costPerHour') }}</span>
          <span class="text-xl font-bold text-primary">${{ totalCostPerHour }}</span>
        </div>
        <div class="flex justify-content-between align-items-center">
          <span class="font-semibold text-600">{{ $t('stats.accumulatedCost') }}</span>
          <span class="text-xl font-bold text-orange-500">${{ accumulatedCost }}</span>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="border-top-1 surface-border pt-3 mt-2 flex justify-content-between align-items-center">
        <span class="text-sm font-semibold text-500 uppercase">{{ $t('stats.reportedIncidents') }}</span>
        <span class="text-lg font-bold text-900">{{ reportedCount }}</span>
      </div>
    </template>
  </pv-card>
</template>
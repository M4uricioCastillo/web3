<script setup>
import { onMounted, computed } from 'vue';
import { useSupportStore } from '@/support/application/support.store.js';
import { useItineraryStore } from '@/itinerary/application/itinerary.store.js';

import IncidentTypeStats from "@/support/presentation/incident-type-stats.vue";
import NextServiceRequest from "@/itinerary/presentation/next-service-request.vue";

const supportStore = useSupportStore();
const itineraryStore = useItineraryStore();

// Cargar todos los datos al montar la vista
onMounted(async () => {
  await supportStore.fetchIncidents();
  await itineraryStore.fetchDestinations();
  await itineraryStore.fetchServiceRequests();
});

// Extraer los tipos de incidentes ÚNICOS para hacer el bucle de las tarjetas
const uniqueIncidentTypes = computed(() => {
  const types = supportStore.incidents.map(inc => inc.incidentType);
  return [...new Set(types)]; // Set elimina los duplicados
});

// Función para filtrar los incidentes que se mandan a cada tarjeta específica
const getIncidentsByType = (type) => {
  return supportStore.incidents.filter(inc => inc.incidentType === type);
};

// Traer la solicitud de alta prioridad usando la función analítica que armaste en el store
const nextRequest = computed(() => itineraryStore.findNextServiceRequest());
</script>

<template>
  <div>
    <div class="mb-5 text-center md:text-left">
      <h1 class="text-4xl font-bold mb-2">{{ $t('home.title') }}</h1>
      <p class="text-xl text-600 m-0">{{ $t('home.subtitle') }}</p>
    </div>

    <div class="grid">
      <div class="col-12 md:col-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('home.analytics') }}</h2>
        <div class="grid">
          <div v-for="type in uniqueIncidentTypes" :key="type" class="col-12 md:col-6 lg:col-4 mb-3">
            <incident-type-stats
                :incidentType="type"
                :incidents="getIncidentsByType(type)"
                :destinations="itineraryStore.destinations"
            />
          </div>
        </div>
      </div>

      <div class="col-12 md:col-4 mt-4 md:mt-0">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('home.nextRequest') }}</h2>
        <next-service-request :serviceRequest="nextRequest" />
      </div>
    </div>
  </div>
</template>
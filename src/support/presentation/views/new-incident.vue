<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSupportStore } from '@/support/application/support.store.js';
import { useItineraryStore } from '@/itinerary/application/itinerary.store.js';

const router = useRouter();
const supportStore = useSupportStore();
const itineraryStore = useItineraryStore();

// Variables reactivas del formulario
const selectedDestinationId = ref(null);
const selectedIncidentType = ref(null);
const errorMessage = ref(''); // Para mostrar el error de "1 al día"

// Valores permitidos en el PDF (pág 2)
const incidentTypes = ref([
  { label: 'Cancelled Activity', value: 'CANCELLED_ACTIVITY' },
  { label: 'Delayed Activity', value: 'DELAYED_ACTIVITY' },
  { label: 'Wrong Activity', value: 'WRONG_ACTIVITY' }
]);

// Cargar destinos al montar para poblar el dropdown
onMounted(async () => {
  await itineraryStore.fetchDestinations();
  await supportStore.fetchIncidents(); // Para tener la lista actualizada y validar el límite diario
});

const onCancel = () => {
  router.push('/home');
};

const onCreate = async () => {
  if (!selectedDestinationId.value || !selectedIncidentType.value) {
    errorMessage.value = "Please fill all fields.";
    return;
  }

  try {
    errorMessage.value = ''; // Limpiar errores previos

    const payload = {
      destinationId: selectedDestinationId.value,
      incidentType: selectedIncidentType.value
    };

    // 1. Crear el incidente (El store valida internamente el límite de 1 por día)
    const newIncident = await supportStore.createIncident(payload);

    // 2. Obtener el objeto destino completo para leer su 'defaultAction'
    const destinationObj = itineraryStore.destinations.find(d => String(d.id) === String(selectedDestinationId.value));

    // 3. Crear el Service Request automático usando el Bounded Context de Itinerary
    await itineraryStore.createAutomatedServiceRequest(newIncident.id, destinationObj);

    // 4. Retornar al Home tras el éxito transaccional
    router.push('/home');

  } catch (error) {
    // Captura el error lanzado por la función validateDailyLimit en el store
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div class="flex justify-content-center mt-5">
    <pv-card class="w-full md:w-6 shadow-2">
      <template #title>
        <span class="text-2xl font-bold">{{ $t('newIncident.title') }}</span>
      </template>
      <template #subtitle>
        <span class="text-600">{{ $t('newIncident.subtitle') }}</span>
      </template>

      <template #content>
        <div class="flex flex-column gap-4 mt-3">

          <div class="flex flex-column gap-2">
            <label class="font-semibold">{{ $t('newIncident.destination') }}</label>
            <pv-dropdown
                v-model="selectedDestinationId"
                :options="itineraryStore.destinations"
                optionLabel="name"
                optionValue="id"
                placeholder="Select a destination"
                class="w-full"
            />
          </div>

          <div class="flex flex-column gap-2">
            <label class="font-semibold">{{ $t('newIncident.type') }}</label>
            <pv-dropdown
                v-model="selectedIncidentType"
                :options="incidentTypes"
                optionLabel="label"
                optionValue="value"
                placeholder="Select an incident type"
                class="w-full"
            />
          </div>

          <small v-if="errorMessage" class="p-error block font-bold text-red-500">
            <i class="pi pi-times-circle mr-1"></i> {{ errorMessage }}
          </small>

        </div>
      </template>

      <template #footer>
        <div class="flex justify-content-end gap-3 mt-4">
          <pv-button :label="$t('newIncident.cancel')" icon="pi pi-times" severity="secondary" text @click="onCancel" />
          <pv-button :label="$t('newIncident.create')" icon="pi pi-check" @click="onCreate" />
        </div>
      </template>
    </pv-card>
  </div>
</template>
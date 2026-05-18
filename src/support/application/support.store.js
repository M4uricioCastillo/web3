import { defineStore } from 'pinia';
import { SupportApi } from "@/support/infrastructure/support-api.js";
import  {IncidentAssembler} from "@/support/infrastructure/incident-assembler.js";

export const useSupportStore = defineStore('support', {
    state: () => ({
        incidents: []
    }),
    actions: {
        async fetchIncidents() {
            try {
                const response = await SupportApi.getIncidents();
                this.incidents = response.data.map(resource => IncidentAssembler.toDomainEntity(resource));
            } catch (error) {
                console.error("Error al obtener los incidentes:", error);
            }
        },

        validateDailyLimit(destinationId) {
            const todayStr = new Date().toISOString().split('T')[0];
            const duplicateIncidents = this.incidents.filter(incident =>
                String(incident.destinationId) === String(destinationId) &&
                incident.registeredAt.startsWith(todayStr)
            );

            return duplicateIncidents.length === 0;
        },
        async createIncident(incidentData) {
            try {
                if (!this.validateDailyLimit(incidentData.destinationId)) {
                    throw new Error("Only one incident per destination is allowed per day.");
                }
                const newIncidentPayload = {
                    ...incidentData,
                    status: "OPEN",
                    registeredAt: new Date().toISOString()
                };
                const response = await SupportApi.createIncident(newIncidentPayload);

                await this.fetchIncidents();

                return response.data;

            } catch (error) {
                console.error("Error al crear el incidente:", error);
                throw error;
            }
        }
    }
});
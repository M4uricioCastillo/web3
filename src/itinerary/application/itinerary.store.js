import { defineStore } from 'pinia';
import { ItineraryApi } from "@/itinerary/infrastructure/itinerary-api.js";
import { DestinationAssembler} from "@/itinerary/infrastructure/destination.assembler.js";
import { ServiceRequestAssembler } from "@/itinerary/infrastructure/service-request.assembler.js";

export const useItineraryStore = defineStore('itinerary', {
    state: () => ({
        destination: [],
        serviceRequests: []
    }),
    actions: {
        async fetchDestinations() {
            try {
                const response = await ItineraryApi.getDestinations();
                this.destinations = response.data.map(resource => DestinationAssembler.toDomainEntity(resource));
            } catch (error) {
                console.error("Error al obtener los destinos:", error);
            }
        },
        async createAutomatedServiceRequest(incidentId, destination) {
            try {
                const newServiceRequestPayload = {
                    destinationId: destination.id,
                    incidentId: incidentId,
                    neededAction: destination.defaultAction,
                    priority: "HIGH",
                    registeredAt: new Date().toISOString()
                };

                await ItineraryApi.createServiceRequest(newServiceRequestPayload);
                await this.fetchServiceRequests();
            } catch (error) {
                console.error("Error al crear la solicitud de servicio automática:", error);
            }
        },

        findNextServiceRequest() {
            const highPriorityRequests = this.serviceRequests.filter(
                request => request.priority === 'HIGH'
            );

            if (highPriorityRequests.length === 0) return null;

            return highPriorityRequests.reduce((oldest, current) => {
                const currentDate = new Date(current.registeredAt);
                const oldestDate = new Date(oldest.registeredAt);

                return currentDate < oldestDate ? current : oldest;
            }, highPriorityRequests[0]);
        }
    }
});
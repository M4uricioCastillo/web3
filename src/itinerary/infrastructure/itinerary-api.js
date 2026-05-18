import http from "../../../shared/infrastructure/base-api.js";

export class ItineraryApi {

    static getDestinations() {
        return http.get('/destinations');
    }

    static getServiceRequests() {
        return http.get('/service-requests');
    }

    static createServiceRequest(serviceRequestData) {
        return http.post('/service-requests', serviceRequestData);
    }
}
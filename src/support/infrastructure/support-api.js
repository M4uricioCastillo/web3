import http from "../../../shared/infrastructure/base-api.js";

export class SupportApi {
    static getIncidents() {
        return http.get('/incidents');
    }
    static createIncident(incidentData) {
        return http.post('/incidents', incidentData);
    }
    static getIncidentsByDestination(destinationId) {
        return http.get(`/incidents?destinationId=${destinationId}`);
    }
}
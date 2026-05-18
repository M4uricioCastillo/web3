export class Incident {
    constructor(id, destinationId, incidentType, registeredAt, status) {
        this.id = id;
        this.destinationId = destinationId;
        this.incidentType = incidentType;
        this.registeredAt = registeredAt;
        this.status = status;
    }
}
export class ServiceRequest {
    constructor(id, destinationId, incidentId, neededAction, priority, registeredAt) {
        this.id = id;
        this.destinationId = destinationId;
        this.incidentId = incidentId;
        this.neededAction = neededAction;
        this.priority = priority;
        this.registeredAt = registeredAt;
    }
}
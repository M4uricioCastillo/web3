import { Incident } from '../domain/model/incident.entity.js';

export class IncidentAssembler {
    static toDomainEntity(resource) {
        return new Incident(
            resource.id,
            resource.destinationId,
            resource.incidentType,
            resource.registeredAt,
            resource.status,
        );
    }
}
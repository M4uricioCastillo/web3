import { ServiceRequest } from '../domain/model/service-request.entity.js';

export class ServiceRequestAssembler {
    static toDomainEntity(resource) {
        return new ServiceRequest(
            resource.id,
            resource.destinationId,
            resource.incidentId,
            resource.neededAction,
            resource.priority,
            resource.registeredAt,
        );
    }
}
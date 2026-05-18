import { Destination } from '../domain/model/destination.entity.js';

export class DestinationAssembler {
    static toDomainEntity(resource) {
        return new Destination(
            resource.id,
            resource.name,
            resource.costPerHour,
            resource.impactInExperience,
            resource.defaultAction,
        );
    }
}
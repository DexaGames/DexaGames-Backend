import { Model } from "mongoose";
import { DeliveryDocument } from "src/deliver-service/deliver-service.model";
import { DeliveryServiceRepositoryInterface } from "src/deliver-service/interface/repository.interface";
import { BaseAbstractRepository } from "./base/base.abstract.repository";
export declare class DeliverServiceRepository extends BaseAbstractRepository<DeliveryDocument> implements DeliveryServiceRepositoryInterface {
    private readonly deliverServiceModel;
    constructor(deliverServiceModel: Model<DeliveryDocument>);
}

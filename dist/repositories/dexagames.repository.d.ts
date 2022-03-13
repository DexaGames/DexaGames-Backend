import { Model } from "mongoose";
import { DexagamesDocument } from "src/dexagames-wordary/dexagames.model";
import { DexGamesRepositoryInterface } from "src/dexagames-wordary/interface/repository.interface";
import { BaseAbstractRepository } from "./base/base.abstract.repository";
export declare class DexaGamesRepository extends BaseAbstractRepository<DexagamesDocument> implements DexGamesRepositoryInterface {
    private readonly deliverServiceModel;
    constructor(deliverServiceModel: Model<DexagamesDocument>);
}

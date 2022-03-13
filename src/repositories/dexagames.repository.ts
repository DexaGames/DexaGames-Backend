import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Dexagames, DexagamesDocument } from "src/dexagames-wordary/dexagames.model";
import { DexGamesRepositoryInterface } from "src/dexagames-wordary/interface/repository.interface";
import { BaseAbstractRepository } from "./base/base.abstract.repository";

@Injectable()
export class DexaGamesRepository extends BaseAbstractRepository<DexagamesDocument> implements DexGamesRepositoryInterface {

  constructor(
      @InjectModel(Dexagames.name) private readonly deliverServiceModel: Model<DexagamesDocument>,
  ) {
    super(deliverServiceModel);
  }

}
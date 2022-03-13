"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const response_dto_1 = require("./../dto/response.dto");
const util_enum_1 = require("./../enums/util.enum");
let DeliveryService = class DeliveryService {
    constructor(deliveryServiceRepository) {
        this.deliveryServiceRepository = deliveryServiceRepository;
    }
    async createDelivery(payload) {
        const response = new response_dto_1.ResponseDTO();
        try {
            payload.status = util_enum_1.DeliveryStatus.pending;
            payload.uuid = (0, crypto_1.randomUUID)();
            await this.deliveryServiceRepository.create(payload);
            response.data = payload;
            response.code = util_enum_1.statusEnum.successful;
        }
        catch (e) {
            console.log(e);
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async updateDelivery(id, payload) {
        const response = new response_dto_1.ResponseDTO();
        try {
            const item = await this.deliveryServiceRepository.findOneById(id);
            if (item == null) {
                response.code = util_enum_1.statusEnum.failed;
                response.message = "Delivery item not found.";
                return response;
            }
            if (payload.to_entity) {
                (item).to_entity = payload.to_entity;
            }
            if (payload.status) {
                (item).status = payload.status;
            }
            if (payload.from_entity) {
                (item).from_entity = payload.from_entity;
            }
            if (payload.delivery_agent) {
                (item).delivery_agent = payload.delivery_agent;
            }
            if (payload.item_id) {
                (item).item_id = payload.item_id;
            }
            item.updated_at = new Date();
            await this.deliveryServiceRepository.getRepo().updateOne(id, item);
            response.data = item;
            response.code = util_enum_1.statusEnum.successful;
        }
        catch (e) {
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async getDelivery(id) {
        const response = new response_dto_1.ResponseDTO();
        try {
            const item = await this.deliveryServiceRepository.findOneById(id);
            if (item == null) {
                response.code = util_enum_1.statusEnum.failed;
                response.message = "Delivery item not found.";
                return response;
            }
            response.data = item;
            response.code = util_enum_1.statusEnum.ok;
        }
        catch (e) {
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async getDeliveries() {
        const response = new response_dto_1.ResponseDTO();
        try {
            const item = await this.deliveryServiceRepository.findAll();
            if (item.length == 0) {
                response.code = util_enum_1.statusEnum.failed;
                response.message = "Delivery item(s) not found.";
                return response;
            }
            response.data = item;
            response.code = util_enum_1.statusEnum.ok;
        }
        catch (e) {
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async deleteDelivery(id) {
        const response = new response_dto_1.ResponseDTO();
        response.data = true;
        try {
            await this.deliveryServiceRepository.remove(id);
            response.code = util_enum_1.statusEnum.successful;
        }
        catch (e) {
            console.log(e);
            response.data = false;
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
};
DeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DeliveryServiceRepositoryInterface')),
    __metadata("design:paramtypes", [Object])
], DeliveryService);
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=deliver-service.service.js.map
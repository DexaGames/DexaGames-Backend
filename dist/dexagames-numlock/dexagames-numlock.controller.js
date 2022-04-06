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
exports.DexagamesNumlockController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const okResponse_dto_1 = require("../dto/okResponse.dto");
const response_dto_1 = require("../dto/response.dto");
const dexagames_numlock_service_1 = require("./dexagames-numlock.service");
let DexagamesNumlockController = class DexagamesNumlockController {
    constructor(service) {
        this.service = service;
    }
    async generateNumber() {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.generateNumber();
        return response.getResponse();
    }
    async validateNumber(number, orignalNumber) {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.validateNumber(number, orignalNumber);
        return response.getResponse();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `
            Generate a random number.
        `,
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(String, { type: 'string' }),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Get)('generate-number/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DexagamesNumlockController.prototype, "generateNumber", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `
            validate number.
        `,
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(Boolean, { type: 'boolean' }),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Get)('validate-number/'),
    __param(0, (0, common_1.Param)('number')),
    __param(1, (0, common_1.Param)('orignalNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DexagamesNumlockController.prototype, "validateNumber", null);
DexagamesNumlockController = __decorate([
    (0, common_1.Controller)('dexagames-numlock'),
    __metadata("design:paramtypes", [dexagames_numlock_service_1.DexagamesNumlockService])
], DexagamesNumlockController);
exports.DexagamesNumlockController = DexagamesNumlockController;
//# sourceMappingURL=dexagames-numlock.controller.js.map
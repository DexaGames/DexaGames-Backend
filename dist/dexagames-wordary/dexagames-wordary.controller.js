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
exports.DexagamesWordaryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const okResponse_dto_1 = require("../dto/okResponse.dto");
const response_dto_1 = require("../dto/response.dto");
const dexagames_wordary_service_1 = require("./dexagames-wordary.service");
let DexagamesWordaryController = class DexagamesWordaryController {
    constructor(service) {
        this.service = service;
    }
    async getRandomWords(query) {
        let response = new response_dto_1.ResponseDTO();
        if (query.maxLength)
            response = await this.service.generateWords(query === null || query === void 0 ? void 0 : query.maxLength);
        if (!query.maxLength)
            response = await this.service.generateWords();
        return response.getResponse();
    }
    async verifyWord(words, word) {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.validateWord(word, words);
        return response.getResponse();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `
            Generate random number and return.
            optional param maxLength can be used to specificy the max character length of the generated string.
            /random-words?maxLength=10
        `,
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(String, { type: 'string' }),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Get)('random-words'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DexagamesWordaryController.prototype, "getRandomWords", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: `
            Generate random number and return.
            optional param maxLength can be used to specificy the max character length of the generated string.
            /random-words?maxLength=10
        `,
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(Boolean, { type: 'boolean' }),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Get)('verify-word/:words/:word'),
    __param(0, (0, common_1.Param)('words')),
    __param(1, (0, common_1.Param)('word')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DexagamesWordaryController.prototype, "verifyWord", null);
DexagamesWordaryController = __decorate([
    (0, common_1.Controller)('dexagames-wordary'),
    (0, swagger_1.ApiResponse)({
        type: response_dto_1.ResponseDTO
    }),
    __metadata("design:paramtypes", [dexagames_wordary_service_1.DexagamesWordaryService])
], DexagamesWordaryController);
exports.DexagamesWordaryController = DexagamesWordaryController;
//# sourceMappingURL=dexagames-wordary.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexagamesNumlockService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const response_dto_1 = require("../dto/response.dto");
const util_enum_1 = require("../enums/util.enum");
let DexagamesNumlockService = class DexagamesNumlockService {
    async generateNumber() {
        var response = new response_dto_1.ResponseDTO();
        try {
            response.code = util_enum_1.statusEnum.successful;
            response.data = `${(0, crypto_1.randomInt)(0, 9)}${(0, crypto_1.randomInt)(0, 9)}${(0, crypto_1.randomInt)(0, 9)}${(0, crypto_1.randomInt)(0, 9)}`;
        }
        catch (e) {
            response.extra_data = e.toString();
            response.code = util_enum_1.statusEnum.error;
        }
        return response;
    }
    async validateNumber(userNumber, originalNumber) {
        var response = new response_dto_1.ResponseDTO();
        try {
            response.code = util_enum_1.statusEnum.ok;
            response.data = userNumber == originalNumber;
        }
        catch (e) {
            response.extra_data = e.toString();
            response.code = util_enum_1.statusEnum.error;
        }
        return response;
    }
};
DexagamesNumlockService = __decorate([
    (0, common_1.Injectable)()
], DexagamesNumlockService);
exports.DexagamesNumlockService = DexagamesNumlockService;
//# sourceMappingURL=dexagames-numlock.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexagamesWordaryService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const response_dto_1 = require("./../dto/response.dto");
const util_enum_1 = require("./../enums/util.enum");
let DexagamesWordaryService = class DexagamesWordaryService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getRequest({ url }) {
        const headers = {
            "app_id": "b08b401e",
            "app_key": "bf89012009f0f25cb71c12ec60be09b6",
        };
        return this.httpService.get(url, { headers: headers }).pipe((0, rxjs_1.map)((response) => {
            return response;
        }), (0, rxjs_1.catchError)((ex) => {
            return [Object.assign({}, ex.response)];
        }));
    }
    async generateWords(wordMinLength = 6, maxLength = 8) {
        var response = new response_dto_1.ResponseDTO();
        try {
            const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            let rand = [];
            const words = await this.fetchSingleWordFromApi();
            if (words.code > util_enum_1.statusEnum.failed) {
                response.data = words.data.filter(x => x.length >= wordMinLength && x.length <= maxLength)[0];
                response.code = util_enum_1.statusEnum.successful;
            }
        }
        catch (e) {
            response.extra_data = e.toString();
            response.code = util_enum_1.statusEnum.error;
        }
        return response;
    }
    async verifyWordIsCorrect(word) {
        var response = new response_dto_1.ResponseDTO();
        response.data = false;
        try {
            const result = await (0, rxjs_1.lastValueFrom)(this.getRequest({ url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-us/" + word }));
            if (result.status == 200) {
                response.data = true;
                response.code = util_enum_1.statusEnum.successful;
            }
        }
        catch (e) {
            response.extra_data = e.toString();
            response.code = util_enum_1.statusEnum.error;
        }
        return response;
    }
    verifyWordInWords(word, words) {
        var response = new response_dto_1.ResponseDTO();
        response.data = false;
        try {
            const _tmpWords = [...words].sort();
            const _tmpWord = [...word].sort();
            response.data = _tmpWord.every(elem => _tmpWords.includes(elem));
            response.code = util_enum_1.statusEnum.successful;
        }
        catch (e) {
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async fetchSingleWordFromApi() {
        var response = new response_dto_1.ResponseDTO();
        try {
            const result = await (0, rxjs_1.lastValueFrom)(this.getRequest({ url: "https://random-word-api.herokuapp.com/word?number=10" }));
            if (result.status == 200) {
                response.data = result.data;
                response.code = util_enum_1.statusEnum.successful;
            }
        }
        catch (e) {
            response.extra_data = e.toString();
            response.code = util_enum_1.statusEnum.error;
        }
        return response;
    }
    async validateWord(word, words) {
        var response = new response_dto_1.ResponseDTO();
        response.data = false;
        try {
            const [wordCorrect, wordValidate] = await Promise.all([
                this.verifyWordIsCorrect(word),
                this.verifyWordInWords(word, words)
            ]);
            if (wordCorrect.data && wordValidate.data) {
                response.data = true;
                response.code = util_enum_1.statusEnum.successful;
                response.message = "word found.";
            }
            else if (!wordValidate.data) {
                response.message = "please stick to the characters given to you.";
            }
            else if (!wordCorrect.data) {
                response.message = "invalid word passed.";
            }
        }
        catch (e) {
            console.log(e.toString());
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
};
DexagamesWordaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], DexagamesWordaryService);
exports.DexagamesWordaryService = DexagamesWordaryService;
//# sourceMappingURL=dexagames-wordary.service.js.map
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
let DexagamesWordaryService = class DexagamesWordaryService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getRequest(url) {
        const headers = {
            "app_id": "b08b401e",
            "app_key": "bf89012009f0f25cb71c12ec60be09b6",
        };
        return this.httpService.get(url, { headers: headers }).pipe((0, rxjs_1.map)((response) => response), (0, rxjs_1.catchError)((ex) => {
            return [Object.assign({}, ex.response)];
        }));
    }
    generateWords(maxLength = 6) {
        const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let rand = [];
        for (let i = 0; i < maxLength; i++) {
            rand.push(alphabets[Math.floor(Math.random() * alphabets.length)]);
        }
        return rand.toString().replace(/,/g, "");
    }
    async verifyWordIsCorrect(word) {
        const result = await (0, rxjs_1.lastValueFrom)(this.getRequest({ url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-us/" + word }));
        console.log("result", result);
        return false;
    }
    verifyWordInWords(word, words) {
        const _tmpWords = [...words].sort();
        const _tmpWord = [...word].sort();
        return _tmpWord.every(elem => _tmpWords.includes(elem));
    }
};
DexagamesWordaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], DexagamesWordaryService);
exports.DexagamesWordaryService = DexagamesWordaryService;
//# sourceMappingURL=dexagames-wordary.service.js.map
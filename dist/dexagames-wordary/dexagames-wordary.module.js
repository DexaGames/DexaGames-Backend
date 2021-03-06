"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexagamesWordaryModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const http_request_1 = require("../http-request/http-request");
const dexagames_wordary_controller_1 = require("./dexagames-wordary.controller");
const dexagames_wordary_service_1 = require("./dexagames-wordary.service");
let DexagamesWordaryModule = class DexagamesWordaryModule {
};
DexagamesWordaryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
        ],
        controllers: [dexagames_wordary_controller_1.DexagamesWordaryController],
        providers: [
            dexagames_wordary_service_1.DexagamesWordaryService,
            {
                provide: 'HTTPRequest',
                useClass: http_request_1.HTTPRequest,
            },
        ]
    })
], DexagamesWordaryModule);
exports.DexagamesWordaryModule = DexagamesWordaryModule;
//# sourceMappingURL=dexagames-wordary.module.js.map
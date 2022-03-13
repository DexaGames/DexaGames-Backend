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
exports.DexagamesSchema = exports.Dexagames = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Dexagames = class Dexagames {
    constructor() {
        this.platform_id = "1";
    }
};
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "item_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "parent", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "from_entity", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "to_entity", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "Dexagames_token", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "Dexagames_agent", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], Dexagames.prototype, "Dexagames_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "platform_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], Dexagames.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], Dexagames.prototype, "updated_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], Dexagames.prototype, "deleted_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Dexagames.prototype, "uuid", void 0);
Dexagames = __decorate([
    (0, mongoose_1.Schema)()
], Dexagames);
exports.Dexagames = Dexagames;
exports.DexagamesSchema = mongoose_1.SchemaFactory.createForClass(Dexagames);
//# sourceMappingURL=dexagames.model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryStatus = exports.statusEnum = void 0;
var statusEnum;
(function (statusEnum) {
    statusEnum[statusEnum["error"] = -2] = "error";
    statusEnum[statusEnum["failed"] = -1] = "failed";
    statusEnum[statusEnum["ok"] = 0] = "ok";
    statusEnum[statusEnum["successful"] = 1] = "successful";
})(statusEnum = exports.statusEnum || (exports.statusEnum = {}));
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["pending"] = "pending";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
//# sourceMappingURL=util.enum.js.map
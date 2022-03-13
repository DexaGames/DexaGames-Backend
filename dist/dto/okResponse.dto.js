"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OkResponse = exports.OkListResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_dto_1 = require("./response.dto");
const OkListResponse = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(response_dto_1.ResponseDTO) },
                {
                    properties: {
                        data: {
                            type: 'array',
                            items: { $ref: (0, swagger_1.getSchemaPath)(model) },
                        },
                    },
                },
            ],
        },
    }));
};
exports.OkListResponse = OkListResponse;
const OkResponse = (model, opts = { type: 'object' }) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(response_dto_1.ResponseDTO) },
                {
                    properties: {
                        data: {
                            type: opts.type,
                            $ref: (0, swagger_1.getSchemaPath)(model),
                        },
                    }
                },
            ],
        },
    }));
};
exports.OkResponse = OkResponse;
//# sourceMappingURL=okResponse.dto.js.map
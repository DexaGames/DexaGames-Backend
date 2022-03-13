import { applyDecorators, Type } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse, ApiResponse, getSchemaPath } from "@nestjs/swagger";
import { ResponseDTO } from "./response.dto";

export const OkListResponse = <TModel extends Type<any>>(model: TModel) => {
    return applyDecorators(
        ApiResponse({
        schema: {
            allOf: [
            { $ref: getSchemaPath(ResponseDTO) },
            {
                properties: {
                data: {
                    type: 'array',
                    items: { $ref: getSchemaPath(model) },
                },
                },
            },
            ],
        },
        }),
    );
};

export const OkResponse = <TModel extends Type<any>>(model: TModel, opts={type: 'object'}) => {
    return applyDecorators(
        ApiResponse({
        schema: {
            allOf: [
            { $ref: getSchemaPath(ResponseDTO) },
            {
                properties: {
                    data: {
                        type: opts.type,
                        $ref: getSchemaPath(model),
                    },
                }
            },
            ],
        },
        }),
    );
};
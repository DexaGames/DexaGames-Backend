/// <reference types="mongoose" />
export declare type DexagamesDocument = Dexagames & Document;
export declare class Dexagames {
    item_id: string;
    parent: string;
    from_entity: string;
    to_entity: string;
    Dexagames_token: string;
    Dexagames_agent: string;
    Dexagames_date: Date;
    status: string;
    platform_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    uuid: string;
}
export declare const DexagamesSchema: import("mongoose").Schema<import("mongoose").Document<Dexagames, any, any>, import("mongoose").Model<import("mongoose").Document<Dexagames, any, any>, any, any, any>, {}>;

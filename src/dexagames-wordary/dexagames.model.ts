import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type DexagamesDocument = Dexagames & Document;

@Schema()
export class Dexagames {
    @Prop(String)
    item_id: string;
    @Prop(String)
    parent: string;
    @Prop(String)
    from_entity: string;
    @Prop(String)
    to_entity: string;
    @Prop(String)
    Dexagames_token: string;
    @Prop(String)
    Dexagames_agent: string;
    @Prop(Date)
    Dexagames_date: Date;
    @Prop(String)
    status: string;
    @Prop(String)
    platform_id: string = "1";
    @Prop(Date)
    created_at: Date;
    @Prop(Date)
    updated_at: Date;
    @Prop(Date)
    deleted_at: Date;
    @Prop(String)
    uuid: string;
}

export const DexagamesSchema = SchemaFactory.createForClass(Dexagames);
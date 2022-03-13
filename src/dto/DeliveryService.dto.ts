import { ApiProperty } from "@nestjs/swagger";

export class DeliveryServiceDTO {
    @ApiProperty()
    item_id: string;
    @ApiProperty()
    from_entity: string;
    @ApiProperty()
    to_entity: string;
    @ApiProperty()
    delivery_agent: string;
    @ApiProperty()
    delivery_token: string;
    @ApiProperty()
    delivery_date: Date;
    @ApiProperty()
    parent: string;
    @ApiProperty()
    status?: string;
    @ApiProperty()
    created_at: Date;
    @ApiProperty()
    updated_at?: Date;
    @ApiProperty()
    deleted_at?: Date;
    @ApiProperty()
    uuid?: string;
}
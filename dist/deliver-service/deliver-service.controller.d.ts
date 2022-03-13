import { DeliveryService } from './deliver-service.service';
import { ResponseDTO } from './../dto/response.dto';
import { DeliveryServiceDTO } from './../dto/DeliveryService.dto';
export declare class DeliveryServiceController {
    private readonly service;
    constructor(service: DeliveryService);
    create(data: DeliveryServiceDTO): Promise<ResponseDTO<unknown>>;
    get(uuid: string): Promise<ResponseDTO<unknown>>;
    find(): Promise<ResponseDTO<DeliveryServiceDTO[]>>;
    update(payload: DeliveryServiceDTO, uuid: string): Promise<ResponseDTO<unknown>>;
    delete(uuid: string): Promise<ResponseDTO<unknown>>;
}

import { DeliveryServiceDTO } from './../dto/DeliveryService.dto';
import { ResponseDTO } from './../dto/response.dto';
import { DeliveryServiceRepositoryInterface } from './interface/repository.interface';
export declare class DeliveryService {
    private readonly deliveryServiceRepository;
    constructor(deliveryServiceRepository: DeliveryServiceRepositoryInterface);
    createDelivery(payload: DeliveryServiceDTO): Promise<ResponseDTO<DeliveryServiceDTO>>;
    updateDelivery(id: any, payload: DeliveryServiceDTO): Promise<ResponseDTO<DeliveryServiceDTO>>;
    getDelivery(id: string): Promise<ResponseDTO<DeliveryServiceDTO>>;
    getDeliveries(): Promise<ResponseDTO<DeliveryServiceDTO[]>>;
    deleteDelivery(id: string): Promise<ResponseDTO<boolean>>;
}

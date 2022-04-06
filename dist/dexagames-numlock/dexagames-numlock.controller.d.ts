import { ResponseDTO } from '../dto/response.dto';
import { DexagamesNumlockService } from './dexagames-numlock.service';
export declare class DexagamesNumlockController {
    private readonly service;
    constructor(service: DexagamesNumlockService);
    generateNumber(): Promise<ResponseDTO<string>>;
    validateNumber(number: string, orignalNumber: string): Promise<ResponseDTO<boolean>>;
}

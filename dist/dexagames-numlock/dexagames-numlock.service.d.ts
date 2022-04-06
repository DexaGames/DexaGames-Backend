import { ResponseDTO } from '../dto/response.dto';
export declare class DexagamesNumlockService {
    generateNumber(): Promise<ResponseDTO<string>>;
    validateNumber(userNumber: any, originalNumber: any): Promise<ResponseDTO<boolean>>;
}

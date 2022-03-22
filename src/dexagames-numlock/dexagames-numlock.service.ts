import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { ResponseDTO } from '../dto/response.dto';
import { statusEnum } from '../enums/util.enum';

@Injectable()
export class DexagamesNumlockService {

    async generateNumber(): Promise<ResponseDTO<string>> {
        var response = new ResponseDTO<string>();
        
        try {
            response.code = statusEnum.successful;
            response.data = `${randomInt(0,9)}${randomInt(0,9)}${randomInt(0,9)}${randomInt(0,9)}`;
        }
        catch(e) {
            response.extra_data = e.toString();
            response.code = statusEnum.error;

        }
        
        return response;
    }

    async validateNumber(userNumber, originalNumber): Promise<ResponseDTO<boolean>> {
        var response = new ResponseDTO<boolean>();
        
        try {
            response.code = statusEnum.ok;
            response.data = userNumber == originalNumber;
        }
        catch(e){
            response.extra_data = e.toString();
            response.code = statusEnum.error;
        }
        
        return response;
    }
}

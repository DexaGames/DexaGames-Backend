import { ResponseDTO } from 'src/dto/response.dto';
import { DexagamesWordaryService } from './dexagames-wordary.service';
export declare class DexagamesWordaryController {
    private readonly service;
    constructor(service: DexagamesWordaryService);
    getRandomWords(query: any): Promise<ResponseDTO<String>>;
    verifyWord(words: string, word: string): Promise<ResponseDTO<boolean>>;
}

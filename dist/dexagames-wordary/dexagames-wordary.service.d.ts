import { HttpService } from '@nestjs/axios';
import { ResponseDTO } from './../dto/response.dto';
export declare class DexagamesWordaryService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private getRequest;
    generateWords(wordMinLength?: number, maxLength?: number): Promise<ResponseDTO<string>>;
    verifyWordIsCorrect(word: string): Promise<ResponseDTO<boolean>>;
    verifyWordInWords(word: string, words: string): ResponseDTO<boolean>;
    fetchSingleWordFromApi(): Promise<ResponseDTO<string[]>>;
    validateWord(word: string, words: string): Promise<ResponseDTO<boolean>>;
}

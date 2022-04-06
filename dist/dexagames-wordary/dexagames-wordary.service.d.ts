import { ResponseDTO } from './../dto/response.dto';
import { AppHTTPRequestInterface } from '../http-request/app-request';
export declare class DexagamesWordaryService {
    private readonly httpRequest;
    constructor(httpRequest: AppHTTPRequestInterface);
    generateWords(wordMinLength?: number, maxLength?: number): Promise<ResponseDTO<string>>;
    verifyWordIsCorrect(word: string): Promise<ResponseDTO<boolean>>;
    verifyWordInWords(word: string, words: string): ResponseDTO<boolean>;
    fetchSingleWordFromApi(): Promise<ResponseDTO<string[]>>;
    validateWord(word: string, words: string): Promise<ResponseDTO<boolean>>;
}

import { HttpService } from '@nestjs/axios';
export declare class DexagamesWordaryService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private getRequest;
    generateWords(maxLength?: number): string;
    verifyWordIsCorrect(word: string): Promise<boolean>;
    verifyWordInWords(word: string, words: string): boolean;
}

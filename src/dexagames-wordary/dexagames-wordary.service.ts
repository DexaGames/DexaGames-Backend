import { Inject, Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import { catchError, lastValueFrom, map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ResponseDTO } from './../dto/response.dto';
import { statusEnum } from './../enums/util.enum';
import { AppHTTPRequestInterface } from '../http-request/app-request';

@Injectable()
export class DexagamesWordaryService {
    constructor(
        @Inject('HTTPRequest') private readonly httpRequest: AppHTTPRequestInterface,
    ){}

    async generateWords(wordMinLength= 6, maxLength= 8): Promise<ResponseDTO<string>> {
        var response = new ResponseDTO<string>();
        
        try {
            if (!wordMinLength) wordMinLength = 6;
            if (!maxLength && wordMinLength) maxLength = wordMinLength;
            
            const words = await this.fetchSingleWordFromApi();
            
            if (words.code > statusEnum.failed) {
                response.data = words.data.filter(x => x.length >= wordMinLength && x.length <= maxLength)[0];
                response.code = statusEnum.successful;
            }
        }
        catch(e) {
            response.extra_data = e.toString();
            response.code = statusEnum.error;
        }
        
        return response;
    }

    async verifyWordIsCorrect(word:string): Promise<ResponseDTO<boolean>> {
        var response = new ResponseDTO<boolean>();
        response.data = false;
        try {
            const result = await (this.httpRequest.getRequest({url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-us/" + word}));
            if (result['status'] == 200) {
                response.data = true;
                response.code = statusEnum.successful;
            }
            
        }
        catch(e){
            response.extra_data = e.toString();
            response.code = statusEnum.error;
        }        
        
        return response;
    }

    verifyWordInWords(word:string, words: string): ResponseDTO<boolean> {
        var response = new ResponseDTO<boolean>();
        response.data = false;
        try {
            const _tmpWords = [...words].sort();
            const _tmpWord = [...word].sort();
            
            // check whether all elements in the array shorter exists in the 
            response.data = _tmpWord.every(elem => _tmpWords.includes(elem));
            response.code = statusEnum.successful;
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }

    async fetchSingleWordFromApi():  Promise<ResponseDTO<string[]>>{
        var response = new ResponseDTO<string[]>();
        try {
            const result = await this.httpRequest.getRequest({url: "https://random-word-api.herokuapp.com/word?number=10"});
            if (result['status'] == 200) {
                response.data = result.data;
                response.code = statusEnum.successful;
            }
        }
        catch(e){
            response.extra_data = e.toString();
            response.code = statusEnum.error;
        }        
        return response;
    }

    async validateWord(word:string, words: string): Promise<ResponseDTO<boolean>> {
        var response = new ResponseDTO<boolean>();
        response.data = false;
        
        try {
            const [wordCorrect, wordValidate] = await Promise.all(
            [
                this.verifyWordIsCorrect(word),
                this.verifyWordInWords(word, words)
            ]);
            if (wordCorrect.data && wordValidate.data) {
                // this is an okay word
                response.data = true;
                response.code = statusEnum.successful;
                response.message = "word found."
            }
            else if (!wordValidate.data) {
                response.message = "please stick to the characters given to you."
            }
            else if (!wordCorrect.data) {
                response.message = "invalid word passed."
            }
        }
        catch(e) {
            console.log(e.toString());
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }
}

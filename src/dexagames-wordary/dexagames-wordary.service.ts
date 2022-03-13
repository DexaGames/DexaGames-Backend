import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import { catchError, lastValueFrom, map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ResponseDTO } from './../dto/response.dto';
import { statusEnum } from './../enums/util.enum';

@Injectable()
export class DexagamesWordaryService {
    constructor(
        private readonly httpService: HttpService,
    ){}

    private getRequest({url}): Observable<AxiosResponse<any>> {
        const headers = {
            "app_id": "b08b401e",
            "app_key": "bf89012009f0f25cb71c12ec60be09b6",
        };
        
        return this.httpService.get(url, {headers: headers}).pipe(
          map((response) => {
            return response;
          }),
          catchError((ex) => {
            return [{ ...ex.response }];
          }),
        );
    }

    async generateWords(wordMinLength: number = 6, maxLength: number = 8): Promise<ResponseDTO<string>> {
        var response = new ResponseDTO<string>();
        
        try {
            const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            let rand = [];
            // for(let i = 0; i < maxLength; i++) {
            //     rand.push(alphabets[Math. floor(Math. random() * alphabets.length)]);
            // }
            
            // response.data = rand.toString().replace(/,/g, "");
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
            const result = await lastValueFrom(this.getRequest({url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-us/" + word}));
            if (result.status == 200) {
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
            const result = await lastValueFrom(this.getRequest({url: "https://random-word-api.herokuapp.com/word?number=10"}));
            if (result.status == 200) {
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

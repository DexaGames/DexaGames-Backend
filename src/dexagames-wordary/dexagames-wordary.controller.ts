import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { OkResponse } from '../dto/okResponse.dto';
import { ResponseDTO } from '../dto/response.dto';
import { DexagamesWordaryService } from './dexagames-wordary.service';

@Controller('dexagames-wordary')
@ApiResponse({
    type: ResponseDTO
})
export class DexagamesWordaryController {
    constructor(
        private readonly service: DexagamesWordaryService,
    ){}
    
    @ApiOperation({
        description: `
            Generate random set of characters and return.
            *Optional param maxLength can be used to specificy the max character length of the generated string.
            {BASE URL}/random-words?maxLength=10 OR {BASE URL}/random-words?minLength=10
        `,
      })
      @ApiProduces('json')
      @OkResponse(String, {type: 'string'})
      @ApiConsumes('application/json', 'multipart/form-data')
      @Get('random-words')
      async getRandomWords(
        @Query() query
      ) {
        let response = new ResponseDTO<String>();
        if (query.maxLength) {
            response = await this.service.generateWords(null, query.maxLength);
        }
        else if (query.minLength) {
            response = await this.service.generateWords(query?.minLength,null);
        }
        else if (!query.maxLength) {
            response = await this.service.generateWords();
        }
        
        return response.getResponse();
      }
      @ApiOperation({
        description: `
            verify passed word is valid. Check is word is correct and word is also a subset of the parent alphabets.
        `,
      })
      @ApiProduces('json')
      @OkResponse(Boolean, {type: 'boolean'})
      @ApiConsumes('application/json', 'multipart/form-data')
      @Get('verify-word/:words/:word')
      async verifyWord(
        @Param('words') words: string,
        @Param('word') word: string,
      ) {
        let response = new ResponseDTO<boolean>();
        response = await this.service.validateWord(word, words);
        
        return response.getResponse();
      }
}

import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { OkResponse } from 'src/dto/okResponse.dto';
import { ResponseDTO } from 'src/dto/response.dto';
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
            Generate random number and return.
            optional param maxLength can be used to specificy the max character length of the generated string.
            /random-words?maxLength=10
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
        if (query.maxLength) response = await this.service.generateWords(query?.maxLength);
        if (!query.maxLength) response = await this.service.generateWords();
        
        return response.getResponse();
      }
      @ApiOperation({
        description: `
            Generate random number and return.
            optional param maxLength can be used to specificy the max character length of the generated string.
            /random-words?maxLength=10
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

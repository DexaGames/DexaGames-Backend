import { Controller, Get, Param } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiProduces } from '@nestjs/swagger';
import { OkResponse } from '../dto/okResponse.dto';
import { ResponseDTO } from '../dto/response.dto';
import { DexagamesNumlockService } from './dexagames-numlock.service';

@Controller('dexagames-numlock')
export class DexagamesNumlockController {
    constructor(
        private readonly service: DexagamesNumlockService,
    ){}
    @ApiOperation({
        description: `
            Generate a random number.
        `,
      })
      @ApiProduces('json')
      @OkResponse(String, {type: 'string'})
      @ApiConsumes('application/json', 'multipart/form-data')
      @Get('generate-number/')
      async generateNumber() {
        let response = new ResponseDTO<string>();
        response = await this.service.generateNumber();
        
        return response.getResponse();
      }
      @ApiOperation({
        description: `
            validate number.
        `,
      })
      @ApiProduces('json')
      @OkResponse(Boolean, {type: 'boolean'})
      @ApiConsumes('application/json', 'multipart/form-data')
      @Get('validate-number/')
      async validateNumber(
          @Param('number') number: string,
          @Param('orignalNumber') orignalNumber: string,
      ) {
        let response = new ResponseDTO<boolean>();
        response = await this.service.validateNumber(number, orignalNumber);
        
        return response.getResponse();
      }
}

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HTTPRequest } from 'src/http-request/http-request';
import { DexagamesNumlockController } from './dexagames-numlock.controller';
import { DexagamesNumlockService } from './dexagames-numlock.service';

@Module({
    imports:[
        HttpModule,
    ],
    providers: [
        DexagamesNumlockService
    ],
    controllers: [
        DexagamesNumlockController
    ],
})
export class DexagamesNumlockModule {}

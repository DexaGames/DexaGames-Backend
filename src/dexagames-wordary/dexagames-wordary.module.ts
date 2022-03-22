import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HTTPRequest } from '../http-request/http-request';
import { DexagamesWordaryController } from './dexagames-wordary.controller';
import { DexagamesWordaryService } from './dexagames-wordary.service';

@Module({
    imports: [
        HttpModule,
    ],
    controllers: [DexagamesWordaryController],
    providers: [
        DexagamesWordaryService,
        {
            provide: 'HTTPRequest',
            useClass: HTTPRequest,
        },
    ]
})
export class DexagamesWordaryModule {}

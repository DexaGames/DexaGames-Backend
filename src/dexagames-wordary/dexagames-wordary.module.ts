import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DexagamesWordaryController } from './dexagames-wordary.controller';
import { DexagamesWordaryService } from './dexagames-wordary.service';

@Module({
    imports: [
        HttpModule,
    ],
    controllers: [DexagamesWordaryController],
    providers: [DexagamesWordaryService]
})
export class DexagamesWordaryModule {}

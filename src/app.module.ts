import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DexagamesWordaryController } from './dexagames-wordary/dexagames-wordary.controller';
import { DexagamesWordaryService } from './dexagames-wordary/dexagames-wordary.service';
import { DexagamesWordaryModule } from './dexagames-wordary/dexagames-wordary.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://localhost:27017/delivery_service_db', 
      'mongodb://162.0.230.238:27017/delivery_service_db',
      {
    autoCreate: true
  }),
    DexagamesWordaryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

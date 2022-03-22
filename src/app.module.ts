import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DexagamesWordaryController } from './dexagames-wordary/dexagames-wordary.controller';
import { DexagamesWordaryService } from './dexagames-wordary/dexagames-wordary.service';
import { DexagamesWordaryModule } from './dexagames-wordary/dexagames-wordary.module';
import { DexagamesNumlockController } from './dexagames-numlock/dexagames-numlock.controller';
import { DexagamesNumlockService } from './dexagames-numlock/dexagames-numlock.service';
import { DexagamesNumlockModule } from './dexagames-numlock/dexagames-numlock.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://localhost:27017/delivery_service_db', 
      'mongodb://162.0.230.238:27017/dexagames_db',
      {
    autoCreate: true
  }),
    DexagamesWordaryModule,
    DexagamesNumlockModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

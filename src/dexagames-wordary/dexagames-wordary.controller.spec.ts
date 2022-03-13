import { Test, TestingModule } from '@nestjs/testing';
import { DexagamesWordaryController } from './dexagames-wordary.controller';

describe('DexagamesWordaryController', () => {
  let controller: DexagamesWordaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DexagamesWordaryController],
    }).compile();

    controller = module.get<DexagamesWordaryController>(DexagamesWordaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

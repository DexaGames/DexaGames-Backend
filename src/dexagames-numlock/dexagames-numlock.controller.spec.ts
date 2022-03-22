import { Test, TestingModule } from '@nestjs/testing';
import { DexagamesWordaryController } from '../dexagames-wordary/dexagames-wordary.controller';
import { statusEnum } from '../enums/util.enum';
import { DexagamesNumlockController } from './dexagames-numlock.controller';
import { DexagamesNumlockService } from './dexagames-numlock.service';

describe('DexagamesNumlockController', () => {
  let controller: DexagamesNumlockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DexagamesNumlockController],
      providers: [DexagamesNumlockService],
    }).compile();

    controller = module.get<DexagamesNumlockController>(DexagamesNumlockController);
  });

  it('should generate random number', async () => {
    const response = await controller.generateNumber();
    expect(response.code).toEqual(statusEnum.successful);
    expect(response.data).toBeDefined();
  });
  it('should verify number', async () => {
    let response = await controller.validateNumber("1000", "1000");
    expect(response.code).toEqual(statusEnum.ok);
    expect(response.data).toEqual(true);

    response = await controller.validateNumber("900", "1000");
    expect(response.code).toEqual(statusEnum.ok);
    expect(response.data).toEqual(false);
  });
});

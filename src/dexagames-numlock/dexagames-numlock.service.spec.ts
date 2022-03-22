import { Test, TestingModule } from '@nestjs/testing';
import { statusEnum } from '../enums/util.enum';
import { DexagamesNumlockService } from './dexagames-numlock.service';

describe('DexagamesNumlockService', () => {
  let service: DexagamesNumlockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DexagamesNumlockService],
    }).compile();

    service = module.get<DexagamesNumlockService>(DexagamesNumlockService);
  });

  it('should generate number', async () => {
    const result = await service.generateNumber();
    
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data).toBeDefined();
  });
  it('should validate number is correct', async () => {
    const result = await service.validateNumber(100, 100);
    
    expect(result.code).toEqual(statusEnum.ok);
    expect(result.data).toEqual(true);
  });
});

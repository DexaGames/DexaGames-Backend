import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { statusEnum } from '../../src/enums/util.enum';
import { DexagamesWordaryService } from './dexagames-wordary.service';

describe('DexagamesWordaryService', () => {
  let service: DexagamesWordaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DexagamesWordaryService],
      imports: [HttpModule]
    }).compile();

    service = module.get<DexagamesWordaryService>(DexagamesWordaryService);
  });

  it('should be create random words', async () => {
    expect(service.generateWords).toBeDefined();
    const word = await service.generateWords(6, 8);
    
    expect(word.code).toEqual(statusEnum.successful);
    expect(word.data.length).toBeGreaterThanOrEqual(6);
    expect(word.data.length).toBeLessThanOrEqual(8);
  });

  it('should vefiry word is an english word', async () => {
    let word = await service.verifyWordIsCorrect("word");
    
    expect(word.code).toEqual(statusEnum.successful);
    expect(word.data).toEqual(true);
    
    word = await service.verifyWordIsCorrect("wordz");
    expect(word.code).toEqual(statusEnum.failed);
    expect(word.data).toEqual(false);
  });

  it('should verify word exist in random generated characters', () => {
    expect(service.verifyWordInWords).toBeDefined();

    let result = service.verifyWordInWords("son", "jackson");
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data).toEqual(true);
    result = service.verifyWordInWords("song", "jackson");
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data).toEqual(false);

  });

  it('should be fetch single word from dictionary api', async () => {
    expect(service.fetchSingleWordFromApi).toBeDefined();
    let result = await service.fetchSingleWordFromApi();
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data.length).toBeGreaterThan(0);
  });

  it('should be validate Word', async () => {
    expect(service.validateWord).toBeDefined();
    let result = await service.validateWord("son", "jackson");
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data).toEqual(true);

    result = await service.validateWord("song", "jackson");
    expect(result.code).toEqual(statusEnum.failed);
    expect(result.data).toEqual(false);
  });
});

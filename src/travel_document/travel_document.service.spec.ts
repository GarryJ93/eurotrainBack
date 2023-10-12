import { Test, TestingModule } from '@nestjs/testing';
import { TravelDocumentService } from './travel_document.service';

describe('TravelDocumentService', () => {
  let service: TravelDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelDocumentService],
    }).compile();

    service = module.get<TravelDocumentService>(TravelDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

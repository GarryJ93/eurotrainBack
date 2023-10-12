import { Test, TestingModule } from '@nestjs/testing';
import { TravelDocumentController } from './travel_document.controller';
import { TravelDocumentService } from './travel_document.service';

describe('TravelDocumentController', () => {
  let controller: TravelDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelDocumentController],
      providers: [TravelDocumentService],
    }).compile();

    controller = module.get<TravelDocumentController>(TravelDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

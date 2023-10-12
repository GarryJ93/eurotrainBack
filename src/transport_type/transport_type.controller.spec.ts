import { Test, TestingModule } from '@nestjs/testing';
import { TransportTypeController } from './transport_type.controller';
import { TransportTypeService } from './transport_type.service';

describe('TransportTypeController', () => {
  let controller: TransportTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportTypeController],
      providers: [TransportTypeService],
    }).compile();

    controller = module.get<TransportTypeController>(TransportTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

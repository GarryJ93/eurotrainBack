import { Test, TestingModule } from '@nestjs/testing';
import { TransportCompanyController } from './transport_company.controller';
import { TransportCompanyService } from './transport_company.service';

describe('TransportCompanyController', () => {
  let controller: TransportCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportCompanyController],
      providers: [TransportCompanyService],
    }).compile();

    controller = module.get<TransportCompanyController>(TransportCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

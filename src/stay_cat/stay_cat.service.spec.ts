import { Test, TestingModule } from '@nestjs/testing';
import { StayCatService } from './stay_cat.service';

describe('StayCatService', () => {
  let service: StayCatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StayCatService],
    }).compile();

    service = module.get<StayCatService>(StayCatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

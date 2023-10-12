import { Test, TestingModule } from '@nestjs/testing';
import { StayCatController } from './stay_cat.controller';
import { StayCatService } from './stay_cat.service';

describe('StayCatController', () => {
  let controller: StayCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StayCatController],
      providers: [StayCatService],
    }).compile();

    controller = module.get<StayCatController>(StayCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

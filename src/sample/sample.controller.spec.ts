import { Test, TestingModule } from '@nestjs/testing';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';

describe('SampleController', () => {
  let controller: SampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleController],
      providers: [SampleService],
    }).compile();

    controller = module.get<SampleController>(SampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

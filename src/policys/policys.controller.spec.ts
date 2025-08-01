import { Test, TestingModule } from '@nestjs/testing';
import { PolicyController } from './policys.controller';
import { PolicyService } from './policys.service';

describe('PolicyController', () => {
  let controller: PolicyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolicyController],
      providers: [PolicyService],
    }).compile();

    controller = module.get<PolicyController>(PolicyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

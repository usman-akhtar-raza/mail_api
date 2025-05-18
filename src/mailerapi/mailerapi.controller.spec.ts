import { Test, TestingModule } from '@nestjs/testing';
import { MailerapiController } from './mailerapi.controller';

describe('MailerapiController', () => {
  let controller: MailerapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailerapiController],
    }).compile();

    controller = module.get<MailerapiController>(MailerapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

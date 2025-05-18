import { Test, TestingModule } from '@nestjs/testing';
import { MailerapiService } from './mailerapi.service';

describe('MailerapiService', () => {
  let service: MailerapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailerapiService],
    }).compile();

    service = module.get<MailerapiService>(MailerapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

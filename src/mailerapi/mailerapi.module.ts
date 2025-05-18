import { Module } from '@nestjs/common';
import { MailerapiService } from './mailerapi.service';

@Module({
  providers: [MailerapiService]
})
export class MailerapiModule {}

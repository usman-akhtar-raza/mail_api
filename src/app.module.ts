import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerapiController } from './mailerapi/mailerapi.controller';
import { MailerapiModule } from './mailerapi/mailerapi.module';

@Module({
  imports: [MailerapiModule],
  controllers: [AppController, MailerapiController],
  providers: [AppService],
})
export class AppModule {}

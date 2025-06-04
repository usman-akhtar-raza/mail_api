import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerapiController } from './mailerapi/mailerapi.controller';
import { MailerapiModule } from './mailerapi/mailerapi.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // allows access everywhere without re-importing
    }),
    MailerapiModule,
  ],
  controllers: [AppController, MailerapiController],
  providers: [AppService],
})

export class AppModule {}

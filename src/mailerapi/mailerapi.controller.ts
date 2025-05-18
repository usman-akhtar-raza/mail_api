import { Body, Controller, Post } from '@nestjs/common';
import { mailerApiService } from './mailerapi.service';

@Controller('mailerapi')
export class MailerapiController {
  constructor(private mail: mailerApiService) {}


@Post('send')
async sendmail(@Body() body: { email: string ,message:string ,senderName:string}){
    const { email, message, senderName } = body;
    console.log(email, '  ', message);
return this.mail.sendEmail(email, message, senderName);
}


}

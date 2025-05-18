import { Module } from '@nestjs/common';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { mailerApiService } from './mailerapi.service';

const mailerOptions: any = {
  transport: {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  },
  defaults: {
    from: '"my app" <no-reply@myapp.com>',
  },
  // dns: require('dns'),
  getSocket: (options, callback) => {
    const net = require('net');
    require('dns').lookup(options.host, { family: 4 }, (err, address) => {
      if (err) return callback(err);
      const socket = net.connect(options.port, address);
      callback(null, socket);
    });
  },
};
@Module({
  imports: [NestMailerModule.forRoot(mailerOptions)],
  providers: [mailerApiService],
  exports: [mailerApiService],
})
export class MailerapiModule {}

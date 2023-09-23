import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return { hello: 'Hello World!' };
  }
}

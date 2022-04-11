import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const hello:string = 'Hello World!'
    return JSON.stringify({hello:hello});
  }
}

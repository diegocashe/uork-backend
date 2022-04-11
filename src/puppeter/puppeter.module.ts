import { Module } from '@nestjs/common';
import { PuppeterService } from './puppeter.service';
import { PuppeterController } from './puppeter.controller';
import { PuppeteerModule } from 'nest-puppeteer';


@Module({
  imports: [
    PuppeteerModule.forRoot( ),
  ],
  controllers: [PuppeterController],
  providers: [PuppeterService]
})
export class PuppeterModule {}

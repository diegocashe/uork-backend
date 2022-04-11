import { Module } from '@nestjs/common';
import { InterestsService } from './interests.service';
import { InterestsController } from './interests.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Interest } from './entities/interest.entity';

@Module({
  imports: [SequelizeModule.forFeature([Interest])],
  exports:[SequelizeModule],
  controllers: [InterestsController],
  providers: [InterestsService]
})
export class InterestsModule {}

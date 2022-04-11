import { Module } from '@nestjs/common';
import { ScopesService } from './scopes.service';
import { ScopesController } from './scopes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Scope } from './entities/scope.entity';

@Module({
  imports: [SequelizeModule.forFeature([Scope])],
  exports:[SequelizeModule],
  controllers: [ScopesController],
  providers: [ScopesService]
})
export class ScopesModule {}

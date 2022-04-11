import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Role } from './entities/role.entity';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

// import { RolesService } from './entities/roles.service';
// import { RolesController } from './roles.controller';
// import { Role } from './entities/role.entity';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  exports:[SequelizeModule],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule { }

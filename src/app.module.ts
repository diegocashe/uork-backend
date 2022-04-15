import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuppeterModule } from './puppeter/puppeter.module';
import { EntitiesModule } from './entities/entities.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'uork',
      password: '1234',
      database: 'uork',
      // models: [Role],
      autoLoadModels: true,
      synchronize: true,
    }),
    PuppeterModule,
    EntitiesModule,
    AuthModule,
    ProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

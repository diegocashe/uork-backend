import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class SchedulesService {

  constructor(
    @InjectModel(Schedule)
    private scheduleModel: typeof Schedule
  ) { }

  create(createScheduleDto: CreateScheduleDto) {
    return this.scheduleModel.create({ ...createScheduleDto });
  }

  findAll() {
    return this.scheduleModel.findAll();
  }

  findOne(id: number) {
    return this.scheduleModel.findByPk(id);
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleModel.update(
      { ...updateScheduleDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.scheduleModel.destroy({
      where: {
        id: id
      }
    });
  }
}
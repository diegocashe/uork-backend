import { Injectable } from '@nestjs/common';
import { CreatePostulationDto } from './dto/create-postulation.dto';
import { UpdatePostulationDto } from './dto/update-postulation.dto';

@Injectable()
export class PostulationsService {
  create(createPostulationDto: CreatePostulationDto) {
    return 'This action adds a new postulation';
  }

  findAll() {
    return `This action returns all postulations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postulation`;
  }

  update(id: number, updatePostulationDto: UpdatePostulationDto) {
    return `This action updates a #${id} postulation`;
  }

  remove(id: number) {
    return `This action removes a #${id} postulation`;
  }
}

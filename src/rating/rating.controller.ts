import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Param,
} from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dtos/create-rating.dto';

@UsePipes(new ValidationPipe())
@Controller('rating')
export class RatingController {
  constructor(private ratingService: RatingService) {}

  @Post()
  create(@Body() body: CreateRatingDto) {
    return this.ratingService.create(body);
  }

  @Get()
  find() {
    return this.ratingService.find();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }) {
    return this.ratingService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param() params: { id: string },
    @Body() body: Partial<CreateRatingDto>,
  ) {
    return this.ratingService.update(params.id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param() param: { id: string }) {
    return this.ratingService.delete(param.id);
  }
}

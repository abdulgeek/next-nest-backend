import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Body,
  HttpCode,
} from '@nestjs/common';
import { CreateReviewDTO } from './dtos/create-review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  create(@Body() body: CreateReviewDTO) {
    return this.reviewService.create(body);
  }

  @Get()
  find() {
    return this.reviewService.find();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }) {
    return this.reviewService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param() params: { id: string },
    @Body() body: Partial<CreateReviewDTO>,
  ) {
    return this.reviewService.update(params.id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param() params: { id: string }) {
    return this.reviewService.delete(params.id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rating, RatingDocument } from 'src/schemas/rating.schema';
import { Model, Mongoose } from 'mongoose';
import { CreateRatingDto } from './dtos/create-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name) private ratingModel: Model<RatingDocument>,
  ) {}

  create(body: CreateRatingDto): Promise<Rating> {
    return this.ratingModel.create(body);
  }

  find(): Promise<Rating[]> {
    return this.ratingModel.find();
  }

  async findOne(id: string): Promise<Rating> {
    const rating = await this.ratingModel.findById(id);
    if (!rating) {
      throw new NotFoundException(`rating ${id} not found`);
    }
    return rating;
  }

  async update(id: string, body: Partial<CreateRatingDto>): Promise<Rating> {
    const rating = await this.ratingModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!rating) {
      throw new NotFoundException(`rating ${id} not found`);
    }
    return rating;
  }

  async delete(id: string): Promise<Rating> {
    return this.ratingModel.findByIdAndDelete(id);
  }
}

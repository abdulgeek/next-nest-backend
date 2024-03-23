import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from 'src/schemas/review.schema';
import { Model } from 'mongoose';
import { CreateReviewDTO } from './dtos/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  create(body: CreateReviewDTO) {
    return this.reviewModel.create(body);
  }

  find(): Promise<Review[]> {
    return this.reviewModel.find();
  }

  async findOne(id: string): Promise<Review> {
    const review = await this.reviewModel.findById(id);

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    return review;
  }

  async update(id: string, body: Partial<CreateReviewDTO>): Promise<Review> {
    const review = await this.reviewModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    return review;
  }

  delete(id: string): Promise<Review> {
    return this.reviewModel.findByIdAndDelete(id);
  }
}

import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateReviewDTO {
  @IsMongoId()
  user: ObjectId;

  @IsMongoId()
  product: ObjectId;

  @IsNotEmpty()
  @IsString()
  description: string;
}

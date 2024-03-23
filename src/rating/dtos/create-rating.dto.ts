import { IsMongoId, IsNotEmpty, IsNumber, Max } from 'class-validator';

export class CreateRatingDto {
  @IsMongoId()
  @IsNotEmpty()
  user: string;

  @IsMongoId()
  @IsNotEmpty()
  product: string;
  
  @IsNumber()
  @Max(5)
  rating: number;
}

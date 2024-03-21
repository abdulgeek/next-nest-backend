import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsNumber()
  totalReviews?: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsOptional()
  @IsNumber()
  discountPrice?: number;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsNotEmpty()
  @IsMongoId()
  user: string;

  @IsOptional()
  @IsMongoId()
  rating?: string;
}

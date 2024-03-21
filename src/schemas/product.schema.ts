import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  tags: string[];

  @Prop()
  totalReviews: number = 0;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  stock: number;

  @Prop()
  discountPrice: number;

  @Prop({ required: true })
  images: string[];

  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  user: {
    type: Types.ObjectId;
  };
  @Prop({ type: Types.ObjectId, ref: 'Rating' })
  rating: {
    type: Types.ObjectId;
  };
}

export const ProductSchema = SchemaFactory.createForClass(Product);

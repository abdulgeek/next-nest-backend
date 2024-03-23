import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: { type: Types.ObjectId };

  @Prop({ type: Types.ObjectId, required: true, ref: 'Product' })
  product: { type: Types.ObjectId };

  @Prop({ required: true })
  description: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

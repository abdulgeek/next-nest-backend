import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  address: string;

  @Prop()
  phoneNumber: string;

  @Prop({ enum: ['User', 'Admin'] })
  role: string;

  @Prop()
  profilePicture: string;

  @Prop({ default: false })
  emailVerified: boolean;

  @Prop()
  verificationToken: string;

  @Prop()
  resetPasswordExpires: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

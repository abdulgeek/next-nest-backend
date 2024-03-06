import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  phNumber: string;
}

interface ItemInfo {
  name: string;
  price: string;
  quantity: string;
  product: Types.ObjectId;
}

interface PaymentInfo {
  paymentId: string;
  status: 'Pending' | 'Successful';
  paymentMethod: string;
  price: number;
  itemPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  deliveryDate: Date;
  deliveryStatus: 'Pending' | 'Delivered' | 'Shipped';
}

@Schema()
export class Order {
  @Prop({ required: true })
  shippingInfo: ShippingInfo;

  @Prop({ required: true })
  itemInfo: ItemInfo[];

  @Prop({ required: true })
  paymentInfo: PaymentInfo;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

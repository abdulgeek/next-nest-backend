import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

class ShippingInfo {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  pinCode: string;

  @Prop({ required: true })
  phNumber: string;
}

class ItemInfo {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  quantity: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Product' })
  product: Types.ObjectId;
}

class PaymentInfo {
  @Prop({ required: true })
  paymentId: string;

  @Prop({ required: true })
  status: 'Pending' | 'Successful';

  @Prop({ required: true })
  paymentMethod: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  itemPrice: number;

  @Prop({ required: true })
  taxPrice: number;

  @Prop({ required: true })
  shippingPrice: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  deliveryDate: Date;

  @Prop({ required: true })
  deliveryStatus: 'Pending' | 'Delivered' | 'Shipped';
}

@Schema()
export class Order {
  @Prop({ type: ShippingInfo, required: true })
  shippingInfo: ShippingInfo;

  @Prop({ type: [ItemInfo], required: true })
  itemInfo: ItemInfo[];

  @Prop({ type: PaymentInfo, required: true })
  paymentInfo: PaymentInfo;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

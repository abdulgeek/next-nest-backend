import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/config';
import { mongooseConfig } from './config/mongoose.config';
import { MongooseFeatureModule } from './config/mongoose.module';
import { ProductModule } from './product/product.module';
import { RatingModule } from './rating/rating.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: mongooseConfig,
    }),
    MongooseFeatureModule,
    UsersModule,
    RatingModule,
    ProductModule,
    ReviewModule,
  ],
})
export class AppModule {}

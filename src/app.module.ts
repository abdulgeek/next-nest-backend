import { Module } from '@nestjs/common';
import { UsersController } from './user/user.controller';
import { UsersService } from './user/user.service';
import { UsersModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/config';
import { mongooseConfig } from './config/mongoose.config';
import { MongooseFeatureModule } from './config/mongoose.module';

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
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}

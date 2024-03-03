import { ConfigService } from '@nestjs/config';

export const mongooseConfig = (configService: ConfigService) => {
  return configService.get('database');
};

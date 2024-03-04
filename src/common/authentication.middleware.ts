/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'src/user/user.service'; 

@Injectable()
export class JwtAuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    let token: string | null;
    if (req.headers.authorization?.startsWith('Bearer')) {
      try {
        token = req.headers.authorization.split(' ')[1];
        if (token) {
          const decoded: any = jwt.verify(token, process.env.JWT_SECRET); 
          const user = await this.userService.findOne(decoded.id); 
          if (!user) {
            throw new UnauthorizedException('User not found.');
          }
          (req as any).user = user;
          next();
        } else {
          throw new UnauthorizedException('Token not provided.');
        }
      } catch (error) {
        throw new UnauthorizedException('Invalid or expired token.');
      }
    } else {
      throw new UnauthorizedException('Authorization header missing or malformed.');
    }
  }
}

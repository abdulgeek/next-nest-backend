import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import {
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Get,
  Patch,
  Delete,
  Param,
  HttpCode,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@UsePipes(new ValidationPipe())
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productService.createProduct(body);
  }

  @Get() findAll() {
    return this.productService.findAll();
  }

  @Get('/:id') find(@Param('id') id: string) {
    return this.productService.find(id);
  }

  @Patch('/:id') update(
    @Param('id') id: string,
    @Body() atts: Partial<CreateProductDto>,
  ) {
    return this.productService.update(id, atts);
  }

  @HttpCode(204)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}

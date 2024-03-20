import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from 'src/schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  createProduct(product: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  findAll(): Promise<Product[]> {
    return this.productModel.find();
  }

  async find(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: string, atts: Partial<CreateProductDto>): Promise<Product> {
    const updateProduct = await this.productModel.findByIdAndUpdate(id, atts, {
      new: true,
    });
    if (!updateProduct) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return updateProduct;
  }

  async delete(id: string): Promise<Product> {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }
}

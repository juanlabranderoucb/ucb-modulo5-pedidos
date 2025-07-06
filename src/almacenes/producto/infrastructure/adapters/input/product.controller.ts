import { Body, Controller, Inject, Post } from '@nestjs/common';

import { IProductServie } from '../../../../../almacenes/producto/application/interfaces/product-service.interface';
import { CreateProductRequest } from './dto/create-product.request';
import { CreateProductRequestToInputMapper } from './mappers/create-product-request-to-input.mapper';

@Controller('products')
export class ProductController {
  constructor(
    @Inject('IProductServie')
    private readonly service: IProductServie,
  ) {}

  @Post()
  create(@Body() body: CreateProductRequest) {
    return this.service.create(CreateProductRequestToInputMapper.map(body));
  }
}

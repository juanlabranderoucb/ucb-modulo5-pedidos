import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { IProductServie } from '../interfaces/product-service.interface';
import { CreateProductCommand } from '../commands/create-product.command';
import { CreateProductInput } from '../dto/create-product.input';
import { ProductOutput } from '../dto/product.output';

@Injectable()
export class ProductServie implements IProductServie {
  constructor(private readonly commandBus: CommandBus) {}

  async create(data: CreateProductInput): Promise<ProductOutput> {
    return this.commandBus.execute(new CreateProductCommand(data));
  }
}

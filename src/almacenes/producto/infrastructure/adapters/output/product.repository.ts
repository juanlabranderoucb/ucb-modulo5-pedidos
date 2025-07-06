import { Injectable } from '@nestjs/common';

import { IProductCommandsPort } from '../../../domain/ports/db/product-commands.port';
import { ProductOutput } from '../../../../../almacenes/producto/application/dto/product.output';

@Injectable()
export class ProductRepository implements IProductCommandsPort<ProductOutput> {
  async create(data): Promise<ProductOutput> {
    return new ProductOutput({ code: 'asd', name: 'snoiun' });
  }
}

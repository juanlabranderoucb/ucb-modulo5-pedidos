import { CreateProductInput } from '../dto/create-product.input';
import { ProductOutput } from '../dto/product.output';

export interface IProductServie {
  create(data: CreateProductInput): Promise<ProductOutput>;
}

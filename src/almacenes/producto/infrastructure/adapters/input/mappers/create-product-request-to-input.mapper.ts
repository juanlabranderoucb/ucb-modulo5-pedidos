import { CreateProductRequest } from '../dto/create-product.request';
import { CreateProductInput } from '../../../../application/dto/create-product.input';

export class CreateProductRequestToInputMapper {
  static map(request: CreateProductRequest): CreateProductInput {
    return {
      code: request.code,
      name: request.name,
    };
  }
}

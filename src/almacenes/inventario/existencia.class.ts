import { IProducto } from '../producto/domain/entities/iproducto.interface';

export class Existencia {
  stock: number;
  minimo: number;
  producto: IProducto;
}

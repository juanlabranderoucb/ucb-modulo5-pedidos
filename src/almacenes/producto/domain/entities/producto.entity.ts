import { IProducto } from './iproducto.interface';

export class Producto implements IProducto {
  codigo: string;
  nombre: string;
}

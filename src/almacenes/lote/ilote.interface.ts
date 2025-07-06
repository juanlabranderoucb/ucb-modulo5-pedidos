import { IProducto } from '../producto/domain/entities/iproducto.interface';

export interface ILote {
  codigo: string;
  fechaExpiracion: Date;
  producto: IProducto;
}

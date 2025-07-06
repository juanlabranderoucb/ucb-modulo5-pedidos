import { IInventario } from './iinventario.interface';
import { ItemTransaccionInventario } from './item-transaccion-inventario.class';

export interface ITransaccionInventario {
  setObservacion(observacion: string): ITransaccionInventario;
  setFechaTransaccion(fecha: Date): ITransaccionInventario;
  setItems(items: Array<ItemTransaccionInventario>): ITransaccionInventario;

  getItems(): Array<ItemTransaccionInventario>;

  registrarEnInventario(inventario: IInventario): void;
}

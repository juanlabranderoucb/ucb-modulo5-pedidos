import { ITransaccionInventario } from './itransaccion-inventario.interface';

export interface IInventario {
  registrarIngreso(transaccion: ITransaccionInventario): void;
  registrarSalida(transaccion: ITransaccionInventario): void;
}

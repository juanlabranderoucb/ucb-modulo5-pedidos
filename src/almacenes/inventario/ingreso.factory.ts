import { Ingreso } from './ingreso.class';
import { ITransaccionInventario } from './itransaccion-inventario.interface';
import { TransaccionInventarioFactory } from './transaccion-inventario.factory';

export class IngresoFactory extends TransaccionInventarioFactory {
  public create(): ITransaccionInventario {
    return new Ingreso();
  }
}

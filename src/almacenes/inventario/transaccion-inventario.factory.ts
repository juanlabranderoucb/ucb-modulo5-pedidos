import { ITransaccionInventario } from './itransaccion-inventario.interface';

export abstract class TransaccionInventarioFactory {
  public abstract create(): ITransaccionInventario;
}

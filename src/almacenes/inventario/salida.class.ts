import { IInventario } from './iinventario.interface';
import { ItemTransaccionInventario } from './item-transaccion-inventario.class';
import { ITransaccionInventario } from './itransaccion-inventario.interface';

export class Salida implements ITransaccionInventario {
  private observacion: string;
  private fechaTransaccion: Date;
  private items: Array<ItemTransaccionInventario>;

  public setObservacion(observacion: string): ITransaccionInventario {
    this.observacion = observacion;
    return this;
  }

  public setFechaTransaccion(fecha: Date): ITransaccionInventario {
    this.fechaTransaccion = fecha;
    return this;
  }

  public setItems(items: Array<ItemTransaccionInventario>): ITransaccionInventario {
    this.items = items;
    return this;
  }

  public getItems(): Array<any> {
    return this.items;
  }

  public registrarEnInventario(inventario: IInventario): void {
    inventario.registrarSalida(this);
  }
}

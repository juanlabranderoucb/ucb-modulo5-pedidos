import { Ingreso } from './ingreso.class';
import { ItemTransaccionInventario } from './item-transaccion-inventario.class';
import { ITransaccionInventario } from './itransaccion-inventario.interface';

interface ITransaccionInventarioBuilder {
  setObservacion(observacion: string): ITransaccionInventarioBuilder;
  setFechaTransaccion(fecha: Date): ITransaccionInventarioBuilder;
  setItems(items: Array<ItemTransaccionInventario>): ITransaccionInventarioBuilder;
}

export class IngresoBuilder implements ITransaccionInventarioBuilder {
  private ingreso: ITransaccionInventario;

  constructor() {
    this.ingreso = new Ingreso();
  }

  public setObservacion(observacion: string): ITransaccionInventarioBuilder {
    this.ingreso.setObservacion(observacion);
    return this;
  }
  public setFechaTransaccion(fecha: Date): ITransaccionInventarioBuilder {
    this.ingreso.setFechaTransaccion(fecha);
    return this;
  }

  public setItems(items: Array<ItemTransaccionInventario>): ITransaccionInventarioBuilder {
    this.ingreso.setItems(items);
    return this;
  }
}

export class SalidaBuilder implements ITransaccionInventarioBuilder {
  private salida: ITransaccionInventario;

  constructor() {
    this.salida = new Ingreso();
  }

  public setObservacion(observacion: string): ITransaccionInventarioBuilder {
    this.salida.setObservacion(observacion);
    return this;
  }

  public setFechaTransaccion(fecha: Date): ITransaccionInventarioBuilder {
    this.salida.setFechaTransaccion(fecha);
    return this;
  }

  public setItems(items: Array<ItemTransaccionInventario>): ITransaccionInventarioBuilder {
    this.salida.setItems(items);
    return this;
  }
}

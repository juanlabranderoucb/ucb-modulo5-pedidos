import { NotAcceptableException } from '@nestjs/common';
import { Existencia } from '../inventario/existencia.class';
import { IInventario } from '../inventario/iinventario.interface';
import { ItemTransaccionInventario } from '../inventario/item-transaccion-inventario.class';
import { ITransaccionInventario } from '../inventario/itransaccion-inventario.interface';

export class Almacen implements IInventario {
  nombre: string;
  ubicacion: string;
  items: Array<Existencia>;
  ingresos: Array<ITransaccionInventario>;
  salidas: Array<ITransaccionInventario>;

  public registrarMovimiento(transaccion: ITransaccionInventario) {
    transaccion.registrarEnInventario(this);
  }

  public registrarIngreso(transaccion: ITransaccionInventario): void {
    const items = transaccion.getItems();
    for (const item of items) {
      this.registrarItemIngreso(item);
    }
    this.ingresos.push(transaccion);
  }

  public registrarSalida(transaccion: ITransaccionInventario): void {
    const items = transaccion.getItems();
    for (const item of items) {
      this.registrarItemSalida(item);
    }
    this.salidas.push(transaccion);
  }

  private registrarItemIngreso(item: ItemTransaccionInventario): void {
    const found = this.items.find((i) => i.producto.codigo == item.lote.producto.codigo);

    if (found) found.stock += item.cantidad;
    else this.items.push(new Existencia());
  }

  private registrarItemSalida(item: ItemTransaccionInventario): void {
    const existencia = this.items.find((i) => i.producto.codigo == item.lote.producto.codigo);

    if (!existencia) {
      throw new NotAcceptableException('Sin existencias para realizar salidas.');
    }

    const stockCalculado = existencia.stock - item.cantidad;
    if (stockCalculado < existencia.minimo)
      throw new NotAcceptableException('Stock minimo para realizar salidas.');

    existencia.stock = stockCalculado;
  }
}

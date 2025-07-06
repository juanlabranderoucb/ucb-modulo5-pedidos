import { Carrito } from './carrito.class';
import { CarritoItem } from './carrito-item.class';

export class CarritoFacade {
  private carrito = new Carrito();

  agregarProducto(codigo: string, nombre: string, cantidad: number, precioUnitario: number): void {
    const item = new CarritoItem(codigo, nombre, cantidad, precioUnitario);
    this.carrito.agregarItem(item);
  }

  eliminarProducto(codigo: string): void {
    this.carrito.eliminarItem(codigo);
  }

  vaciarCarrito(): void {
    this.carrito.vaciar();
  }

  obtenerTotal(): number {
    return this.carrito.total;
  }

  obtenerItems(): CarritoItem[] {
    return this.carrito.getItems();
  }
}

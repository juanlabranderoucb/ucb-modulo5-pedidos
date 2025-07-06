import { CarritoItem } from './carrito-item.class';

export class Carrito {
  private items: CarritoItem[] = [];

  agregarItem(item: CarritoItem): void {
    const existente = this.items.find((i) => i.codigo === item.codigo);
    if (existente) {
      existente.cantidad += item.cantidad;
    } else {
      this.items.push(item);
    }
  }

  eliminarItem(codigo: string): void {
    this.items = this.items.filter((i) => i.codigo !== codigo);
  }

  vaciar(): void {
    this.items = [];
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.subtotal, 0);
  }

  getItems(): CarritoItem[] {
    return [...this.items];
  }
}

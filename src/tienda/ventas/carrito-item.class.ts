export class CarritoItem {
  constructor(
    public codigo: string,
    public nombre: string,
    public cantidad: number,
    public precioUnitario: number,
  ) {}

  get subtotal(): number {
    return this.cantidad * this.precioUnitario;
  }
}

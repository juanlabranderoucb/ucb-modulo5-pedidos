export interface IMetodoPagoStrategy {
  procesarPago(monto: number): boolean;
}

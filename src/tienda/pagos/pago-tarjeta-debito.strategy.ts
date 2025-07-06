import { IMetodoPagoStrategy } from './imetodo-pago.interface';

export class PagoTarjetaDebito implements IMetodoPagoStrategy {
  private numeroTarjeta: string;
  private cvv: string;

  public procesarPago(monto: number): boolean {
    if (monto > 0 && this.numeroTarjeta.length === 16 && this.cvv.length === 3) {
      console.log('  Pago con tarjeta de crédito procesado exitosamente.');
      return true;
    }
    console.log('  Error al procesar pago con tarjeta de crédito: Datos inválidos.');
    return false;
  }
}

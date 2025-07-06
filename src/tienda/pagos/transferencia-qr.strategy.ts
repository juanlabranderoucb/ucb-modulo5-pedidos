import { IMetodoPagoStrategy } from './imetodo-pago.interface';

export class TransferenciaQR implements IMetodoPagoStrategy {
  private qr: string;

  public procesarPago(monto: number): boolean {
    if (monto > 0 && this.qr.length) {
      console.log('  Pago con QR procesado exitosamente.');
      return true;
    }
    console.log('  Error al procesar pago con QR: Datos inválidos.');
    return false;
  }
}

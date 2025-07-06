export class ProductOutput {
  readonly code: string;
  readonly name: string;

  readonly metadata: {
    createdAt: Date;
    updatedAt?: Date;
    createdBy: string;
    updatedBy: string;
  };

  constructor(data: Partial<ProductOutput>) {
    Object.assign(this, data);
  }
}

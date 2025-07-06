export interface IProductCommandsPort<Output> {
  create(data): Promise<Output>;
}

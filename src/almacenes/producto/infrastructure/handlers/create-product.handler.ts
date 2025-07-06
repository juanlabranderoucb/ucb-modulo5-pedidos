import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { IProductCommandsPort } from '../../domain/ports/db/product-commands.port';
import { CreateProductCommand } from '../../../../almacenes/producto/application/commands/create-product.command';
import { ProductOutput } from '../../../../almacenes/producto/application/dto/product.output';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(
    @Inject('IProductCommandsPort')
    private readonly repository: IProductCommandsPort<ProductOutput>,
  ) {}

  async execute(command: CreateProductCommand) {
    return await this.repository.create(command.data);
  }
}

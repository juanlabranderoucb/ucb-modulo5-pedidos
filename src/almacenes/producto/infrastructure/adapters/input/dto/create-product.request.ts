import { IsDefined, IsString } from 'class-validator';

export class CreateProductRequest {
  @IsDefined()
  @IsString()
  code: string;

  @IsDefined()
  @IsString()
  name: string;
}

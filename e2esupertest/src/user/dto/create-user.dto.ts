import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class Arr {
  @IsNotEmpty()
  hi: string;
}
export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @ValidateNested({ each: true })
  @Type(() => Arr)
  arr: Arr[];
}

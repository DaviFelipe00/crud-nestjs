import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Davi Barbosa', description: 'Nome completo' })
  name: string;

  @ApiProperty({ example: 'davi@email.com', description: 'Email único' })
  email: string;
}
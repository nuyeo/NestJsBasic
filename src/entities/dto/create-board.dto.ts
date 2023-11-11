import { IsNotEmpty } from 'class-validator';

export class createBoardDto {
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  description!: string;
}

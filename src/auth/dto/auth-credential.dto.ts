import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsEmail() // 사용자 아이디로 이메일 사용
  @MinLength(4)
  @MaxLength(32)
  email!: string;

  @IsString() // 해시 값이기 때문에 유효성 검사 생략
  hashedPassword!: string;
}

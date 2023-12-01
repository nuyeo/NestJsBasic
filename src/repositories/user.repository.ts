import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credential.dto';
import { CustomRepository } from 'src/configs/custom-typeorm.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ email, password: hashedPassword });

    try {
      await this.save(user);
    } catch (error) {
      if (isDatabaseError(error) && error.code === '23505') {
        throw new ConflictException('Existing Email');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}

function isDatabaseError(err: any): err is { code: string } {
  return err && typeof err.code === 'string';
}

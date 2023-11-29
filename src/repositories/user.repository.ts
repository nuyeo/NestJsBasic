import { AuthCredentialsDto } from 'src/auth/dto/auth-credential.dto';
import { CustomRepository } from 'src/configs/custom-typeorm.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, hashedPassword } = authCredentialsDto;
    const user = this.create({ email, hashedPassword });

    await this.save(user);
  }
}

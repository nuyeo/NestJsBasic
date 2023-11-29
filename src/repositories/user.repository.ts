import { CustomRepository } from 'src/configs/custom-typeorm.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}

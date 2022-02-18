import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.model';
import { UserCreateDto } from './dto/user-create.dto';
import { ForbiddenException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

	findAll(): Promise<User[]> {
		return this.usersRepository.find();
	}

	findOne(email: string): Promise<User> {
		return this.usersRepository.findOne({ email: email });
	}

	async create(userCreateDto: UserCreateDto): Promise<any> {
		const isExist = await this.usersRepository.findOne({ email: userCreateDto.email });

		if (isExist) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`이미 등록된 사용자입니다.`],
				error: 'Forbidden'
			});
		}

		const { ...res } = await this.usersRepository.save(userCreateDto);
		return res;
	}

	async remove(id: string): Promise<void> {
		await this.usersRepository.delete(id);
	}
}

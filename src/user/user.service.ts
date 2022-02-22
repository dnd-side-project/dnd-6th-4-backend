import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.model';
import { UserCreateDto } from './dto/user-create.dto';
import { ForbiddenException, HttpStatus } from '@nestjs/common';
import { UserChangeDto } from './dto/user-change.dto';

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

	async changeUserName(userChangeDto: UserChangeDto) {
		const isExist = await this.usersRepository.findOne({ id: userChangeDto.id });

		if (!isExist) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`존재하지 않는 유저 정보 입니다.`],
				error: 'Forbidden'
			});
		}

		if (!userChangeDto.user_nm) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`body에 변경 유저 이름을 작성해주세요.`],
				error: 'Forbidden'
			});
		}

		const { affected } = await this.usersRepository.update({id : userChangeDto.id }, 
										{user_nm : userChangeDto.user_nm}
										);

		return affected;
	}

	async changeUserPassword(userChangeDto: UserChangeDto) {
		const isExist = await this.usersRepository.findOne({ id: userChangeDto.id });

		if (!isExist) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`존재하지 않는 유저 정보 입니다.`],
				error: 'Forbidden'
			});
		}

		if (!userChangeDto.password) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`body에 변경 유저 비밀번호를 작성해주세요.`],
				error: 'Forbidden'
			});
		}

		const { affected } = await this.usersRepository.update({id : userChangeDto.id }, 
										{password : userChangeDto.password}
										);
		return affected;
	}

	async changeUserPhoneNumber(userChangeDto: UserChangeDto) {
		const isExist = await this.usersRepository.findOne({ id: userChangeDto.id });

		if (!isExist) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`존재하지 않는 유저 정보 입니다.`],
				error: 'Forbidden'
			});
		}

		if (!userChangeDto.phone_num) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`body에 변경 유저 전화번호를 작성해주세요.`],
				error: 'Forbidden'
			});
		}

		const { affected } = await this.usersRepository.update({id : userChangeDto.id }, 
										{phone_num : userChangeDto.phone_num}
										);

		return affected;
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

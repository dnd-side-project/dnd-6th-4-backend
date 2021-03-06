import { Injectable, ForbiddenException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.model';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from '../user/dto/user-request.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
		private jwtService: JwtService
	) {}

	async validateUser(loginUserDto: UserLoginDto): Promise<any> {
		const user = await this.userRepository.findOne({
			email: loginUserDto.email
		});

		if (!user) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`등록되지 않은 사용자입니다.`],
				error: 'Forbidden'
			});
		}

		// const isMatch = await bcrypt.compare(loginUserDto.password, user.password);
		const isMatch = loginUserDto.password === user.password ? true : false;

		if (isMatch) {
			const { password, ...result } = user;
			return result;
		} else {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`사용자 정보가 일치하지 않습니다.`],
				error: 'Forbidden'
			});
		}
	}

	async login(user: any) {
		const payload = {
			email: user.email,
			user_nm: user.user_nm,
			id: user.id,
			role: user.role
		};
		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}

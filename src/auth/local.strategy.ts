import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../user/dto/user-request.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({
			usernameField: 'email'
		});
	}

	async validate(email: string, password: string): Promise<any> {
		const loginUserDto: UserLoginDto = {
			email: email,
			password: password
		};

		const user = await this.authService.validateUser(loginUserDto);

		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}

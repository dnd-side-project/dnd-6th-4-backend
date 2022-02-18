import { IsString, IsInt, Min, Max, IsEmail } from 'class-validator';

export class UserCreateDto {
	@IsString()
	@IsEmail()
	email: string;

	@IsString()
	user_nm: string;

	@IsString()
	password: string;

	@IsInt()
	@Min(0)
	@Max(1)
	role: number;

	@IsString()
	phone_num: string;
}

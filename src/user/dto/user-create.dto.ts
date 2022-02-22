import { IsString, IsInt, Min, Max, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
	@IsString()
	@IsEmail()
	@ApiProperty({ description: "이메일 형태로 작성 필수 (*@*)", type: "string" })
	email: string;

	@IsString()
	@ApiProperty({ type: "string" })
	user_nm: string;

	@IsString()
	@ApiProperty({ type: "string" })
	password: string;

	@IsInt()
	@Min(0)
	@Max(1)
	@ApiProperty({ type: "number", description: "0 || 1 로 작성 바랍니다." })
	role: number;

	@IsString()
	@ApiProperty({ type: "string", description: "형태는 자유롭게 활용하셔도 됩니다." })
	phone_num: string;

	@IsOptional()
	@ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
	parent_phone_num?: string
}

import { IsString, IsInt, Min, Max, IsEmail, IsOptional } from 'class-validator';

export class UserChangeDto {
    @IsInt()
    @Min(1)
    id: number;

    @IsString()
    @IsOptional()
	user_nm?: string;

	@IsString()
    @IsOptional()
	password?: string;

    @IsString()
    @IsOptional()
    phone_num?: string;
}
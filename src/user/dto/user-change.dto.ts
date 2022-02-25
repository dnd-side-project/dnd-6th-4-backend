import { IsString, IsInt, Min, Max, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserChangeDto {
    @IsInt()
    @Min(1)
    @ApiProperty({ description: "1 이상의 값만 할당 할 수 있습니다.", type: "number" })
    id: number;

    @IsString()
    @IsOptional()
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
	user_nm?: string;

	@IsString()
    @IsOptional()
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
	password?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    phone_num?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    contact_time?: string;
}
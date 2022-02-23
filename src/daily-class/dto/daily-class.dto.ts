import { IsString, IsInt, Min, IsMilitaryTime, IsOptional, IsBoolean, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DailyClassDto {
    @IsInt()
    @Min(1)
    @ApiProperty({ description: "매핑된 고유 클래스 아이디(auto increment)로 1 이상의 값이 필요합니다.", type: "number" })
    subject_id: number;

    @IsInt()
    @Min(0)
    @ApiProperty({ description: "최소 0 이상의 값이 필요로 됩니다.", type: "number" })
    class_order: number;

    @IsMilitaryTime()
    @ApiProperty({ description: "HH:MM 형태로 보내주세요.", type: "string" })
    start_time: Date;

    @IsString()
    @ApiProperty({ type: "string" })
    place: string;

    @IsString()
    @ApiProperty({ type: "string" })
    chapter: string;

    @IsString()
    @ApiProperty({ type: "string" })
    memo: string;

    @IsString()
    @ApiProperty({ type: "string" })
    noty: string;

    @IsString()
    @ApiProperty({ type: "string" })
    daily_feedback: string;

    @IsString()
    @ApiProperty({ type: "string" })
    daily_comment: string;

    @IsString()
    @ApiProperty({ type: "string" })
    homework: string;

    @IsOptional()
    @IsBoolean()
    @ApiProperty({ type: "boolean", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    change_feedback?: boolean;

    @IsOptional()
    @IsMilitaryTime()
    @ApiProperty({ type: "string", default: null, required: false, description: "HH:MM으로 보내주세요. 필수로 작성할 필요는 없습니다."})
    change_start_time?: Date;

    @IsOptional()
    @IsInt()
    @ApiProperty({ type: "number", default: null, required: false, description: "이모지 표시를 위한 칼럼입니다. 필수로 작성할 필요는 없습니다."})
    difficulty?: number;
}
import { IsString, IsInt, Min, IsMilitaryTime, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DailyFeedbackDto {
    @IsInt()
    @Min(1)
    @ApiProperty({ description: "매핑된 고유 클래스 아이디(auto increment)로 1 이상의 값이 필요합니다.", type: "number" })
    id: number;

    @IsString()
    @ApiProperty({ type: "string" })
    daily_feedback: string;
}
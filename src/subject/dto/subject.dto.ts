import { IsString, IsInt, Min, Max, IsNumber, IsMilitaryTime, isDateString, IsDate, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SubjectDto {
    // TODO - 한글 post 실패
    @IsString()
    @ApiProperty({ description: "과목 이름", type: "string" })
    subject_nm: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @ApiProperty({ description: "최소 0 이상의 값을 입력해주세요", type: "number" })
    salary?: number;

    @IsInt()
    @Min(4)
    @Max(12)
    @ApiProperty({ description: "최소 4 ~ 최대 12 사이의 값만 허용합니다.", type: "number" })
    monthly_cnt: number;

    // HH : MM
    @IsMilitaryTime() 
    @ApiProperty({ description: "HH:MM 형태의 시간 값을 보내주세요", type: "string" })
    class_time: Date;

    // 2020-01-01
    @IsOptional()
    @IsDateString()
    @ApiProperty({ description: "YYYY-MM-DD 형태 날짜를 보내주세요.", type: "string" })
    class_day?: string;

    @IsInt()
    @ApiProperty({ description: "int 값으로 선생님 고유 id를 찾아 보내주세요.", type: "number" })
    teacher_id: number;

    @IsInt()
    @ApiProperty({ description: "색상을 int 형태로 보내주세요.", type: "number" })
    color: number;
}

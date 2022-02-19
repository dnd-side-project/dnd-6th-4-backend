import { IsString, IsInt, Min, Max, IsNumber, IsMilitaryTime, isDateString, IsDate, IsDateString } from 'class-validator';

export class SubjectDto {
    // TODO - 한글 post 실패
    @IsString()
    subject_nm: string;

    @IsNumber()
    @Min(0)
    salary: number;

    @IsInt()
    @Min(4)
    @Max(12)
    monthly_cnt: number;

    // HH : MM
    @IsMilitaryTime() 
    class_time: Date;

    // 2020-01-01
    @IsDateString()
    class_day: Date;

    @IsInt()
    teacher_id: number;
}

import { IsString, IsInt, Min, Max, IsNumber, IsDate, IsMilitaryTime } from 'class-validator';

export class SubjectCreateDto {
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
    @IsDate()
    class_day: Date;

    @IsInt()
    teacher_id: number;
}
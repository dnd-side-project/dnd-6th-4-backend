import { IsString, IsInt, Min, Max, IsNumber, IsMilitaryTime, isDateString, IsDate, IsDateString } from 'class-validator';

export class DailyClassDto {
    @IsInt()
    subject_id: number;

    @IsInt()
    @Min(0)
    class_order: number;

    @IsMilitaryTime()
    start_time: Date;

    @IsMilitaryTime()
    end_time: Date;

    @IsString()
    plate: string;

    @IsString()
    chapter: string;

    @IsString()
    memo: string;

    @IsString()
    noty: string;

    @IsString()
    daily_feedback: string;

    @IsString()
    daily_comment: string;

    @IsString()
    homework: string;
}
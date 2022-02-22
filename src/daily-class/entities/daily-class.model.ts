import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Daily_Class')
export class DailyClass {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: "자동 생성 칼럼으로 생성할 떄에는 무시"})
    id: number;

    @Column()
    subject_id: number;

    @Column()
    class_order: number;

    @Column('time')
    start_time: Date;

    // @Column('time')
    // end_time: Date;

    @Column()
    place: string;
    
    @Column()
    chapter: string;
    
    @Column()
    memo: string;
    
    @Column()
    noty: string;
    
    @Column()
    daily_feedback: string;
    
    @Column()
    daily_comment: string;
    
    @Column()
    homework: string;

    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    change_feedback: boolean;

    @Column('time', { nullable: true, default: null })
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    change_start_time: Date;
}
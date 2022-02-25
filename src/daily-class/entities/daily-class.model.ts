import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Daily_Class')
export class DailyClass {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: "자동 생성 칼럼으로 생성할 떄에는 무시"})
    id: number;

    @Column()
    @ApiProperty({ description: "Subject 클래스 pk로 매핑될 id"})
    subject_id: number;

    @Column()
    @ApiProperty({ description: "회차를 작성하기 위한 칼럼"})
    class_order: number;

    @Column('time')
    @ApiProperty({ description: "수업 시작 시간을 의미합니다. HH:MM으로 보내주세요."})
    start_time: Date;

    // @Column('time')
    // end_time: Date;

    @Column()
    @ApiProperty({ description: "수업 장소를 의미합니다."})
    place: string;
    
    @Column()
    @ApiProperty({ description: "수업 챕터를 의미합니다."})
    chapter: string;
    
    @Column()
    @ApiProperty({ description: "메모를 남기기 위한 칼럼입니다."})
    memo: string;
    
    @Column()
    @ApiProperty({ description: "알림을 주기 위한 칼럼입니다."})
    noty: string;
    
    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    daily_feedback?: string;
    
    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    daily_comment?: string;
    
    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    homework?: string;

    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    change_feedback: boolean;

    @Column('time', { nullable: true, default: null })
    @ApiProperty({ type: "Date", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    change_start_time: Date;

    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "number", default: null, required: false, description: "이모지 표시를 위한 칼럼입니다. 필수로 작성할 필요는 없습니다."})
    difficulty?: number;
}
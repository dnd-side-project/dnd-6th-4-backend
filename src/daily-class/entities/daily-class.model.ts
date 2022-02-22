import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Daily_Class')
export class DailyClass {
    @PrimaryGeneratedColumn()
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
}
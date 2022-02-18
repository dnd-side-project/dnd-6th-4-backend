import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Subject')
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subject_nm: string

    @Column()
    salary: number;

    @Column()
    monthly_cnt: number;

    @Column({ default: "timestamp"})
    class_time: Date;

    @Column({ default: "date" })
    class_day: Date;

    @Column()
    teacher_id: number;

    @Column({ nullable: true, default: null })
    student_id: number;
}
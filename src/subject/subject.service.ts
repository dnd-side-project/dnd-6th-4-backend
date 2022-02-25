import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.model';
import { SubjectDto } from './dto/subject.dto';

@Injectable()
export class SubjectService {
    constructor(
		@InjectRepository(Subject)
		private subjectRepository: Repository<Subject>
	) {}

    findAll(): Promise<Subject[]> {
        return this.subjectRepository.find();
    }

    findOneByTeacherId(teacher_id: number): Promise<Subject[]> {
        return this.subjectRepository.find({ teacher_id: teacher_id });
    }

    findOneByStudentId(student_id: number): Promise<Subject[]> {
        return this.subjectRepository.find({ student_id: student_id });
    }

    findOneById(id: number): Promise<Subject> {
        return this.subjectRepository.findOne({ id: id });
    }

    async create(subjectDto: SubjectDto): Promise<any> {
        const { ...res } = await this.subjectRepository.save(subjectDto);
        return res;
    }

    async deleteSubjectById(subjectId: number) {
        this.subjectRepository.delete({ id: subjectId });
    }
}
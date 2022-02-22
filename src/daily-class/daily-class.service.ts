import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyClass } from './entities/daily-class.model';
import { DailyClassDto } from './dto/daily-class.dto';
import { SubjectDto } from '../subject/dto/subject.dto';
import { ForbiddenException, HttpStatus } from '@nestjs/common';

@Injectable()
export class DailyClassService {
    constructor(
		@InjectRepository(DailyClass)
		private dailyClassRepository: Repository<DailyClass>
	) {}

    findAll(): Promise<DailyClass[]> {
        return this.dailyClassRepository.find();
    }

	findAllbySubjectId(subject_id: number): Promise<DailyClass[]> {
		return this.dailyClassRepository.find({ subject_id: subject_id});
	}

	findOne(subject_id: number, class_order: number): Promise<DailyClass> {
		return this.dailyClassRepository.findOne({ subject_id: subject_id, class_order: class_order });
	}

	async create(dailyClassDto: DailyClassDto): Promise<any> {
		const isExist = await this.dailyClassRepository.findOne({ subject_id: dailyClassDto.subject_id, class_order: dailyClassDto.class_order });
		if (isExist) {
			throw new ForbiddenException({
				statusCode: HttpStatus.FORBIDDEN,
				message: [`이미 등록된 수업 일정입니다.`],
				error: 'Forbidden'
			});
		}

		const { ...res } = await this.dailyClassRepository.save(dailyClassDto);
		return res;
	}
}

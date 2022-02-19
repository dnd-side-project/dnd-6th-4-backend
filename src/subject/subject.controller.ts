import {
	Controller,
	Get,
	Post,
	Body,
    Put,
	// Patch,
	Param,
    Query
	// Delete,
	// Query
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectDto } from './dto/subject.dto';
import { Subject } from './entities/subject.model';

@Controller('subject')
export class SubjectController {
    constructor(private subjectService: SubjectService) {}

    @Get('all')
    findAll() {
        return this.subjectService.findAll();
    }

    @Get()
    findByClassId(@Query() req: any) {
        // return `this is ${req.id} - class uri`;
        console.log(req.id);
        return this.subjectService.findOneByTeacherId(req.id);
    }

    @Post()
    async createSubject(@Body() createSubjectDto: SubjectDto) {
        // return 'this is subject create uri';
        return await this.subjectService.create(createSubjectDto);
    }

    @Put()
    async changeSubjectInfo() {
        return 'this is subject info change uri';
    }
}
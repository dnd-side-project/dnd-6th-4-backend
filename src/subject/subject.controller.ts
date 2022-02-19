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

@Controller('subject')
export class SubjectController {
    constructor() {}

    @Get('all')
    findAll() {
        return "this is subject find all uri";
    }

    @Get()
    findByClassId(@Query()id: number) {
        // TOOD - id 오류가 생성되는 것으로 보임, [Object Object]
        return `this is ${id} - class uri`;
    }

    @Post()
    async createSubject() {
        return 'this is subject create uri';
    }

    @Put()
    async changeSubjectInfo() {
        return 'this is subject info change uri';
    }
}
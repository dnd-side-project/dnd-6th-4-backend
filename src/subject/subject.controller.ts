import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
    Query
} from '@nestjs/common';

@Controller('subject')
export class SubjectController {
    constructor() {}
	// constructor(private readonly sampleService: SampleService) {}

	@Get()
	findAllSubjectsById(@Query('id') id: string) {
		return `TODO - check ${id} is in database`
	}

	// @Post()
	// addSubjectById(@Query('id') id: string) {
	// 	return;
	// }

    // @Delete()
	// DeleteSubjectById(@Query('id') id: string, @Query('subject') subject: string) {
	// 	return;
	// }
}

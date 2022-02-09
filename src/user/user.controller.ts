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

@Controller('user')
export class UserController {
    constructor() {}
	// constructor(private readonly sampleService: SampleService) {}

	@Get()
	findUserById(@Query('id') id: string) {
		return `TODO - check ${id} is in database`
	}

	// @Post()
	// addUser() {
	// 	return;
	// }
}

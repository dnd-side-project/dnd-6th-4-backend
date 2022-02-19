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
// import { DailyClassDto } from './dto/daily-class.dto';

@Controller('dailyclass')
export class DailyClassController {
    constructor() {}

    @Get('all')
    findAll() {
        return 'this is daily class find all';
    }

    @Get()
    findByDailyClassId(@Query() queryString: any) {
        // return `this is ${req.id} - class uri`;
    }

    @Post()
    async createDailyClass() {
        return 'this is daily class create uri';
    }

    @Put()
    async changeDailyClassInfo() {
        return 'this is dailyclass info change uri';
    }
}
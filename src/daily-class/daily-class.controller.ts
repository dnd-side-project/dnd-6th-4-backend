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
import { DailyClassDto } from './dto/daily-class.dto';
import { DailyClassService } from './daily-class.service';
import { DailyClass } from './entities/daily-class.model';

@Controller('dailyclass')
export class DailyClassController {
    constructor(private dailyClassService: DailyClassService ) {}

    @Get('all')
    findAll() {
        return this.dailyClassService.findAll();
    }

    @Get()
    findByDailyClassId(@Query('id') subject_id: number) {
        return this.dailyClassService.findAllbySubjectId(subject_id);
    }

    @Post()
    async createDailyClass(@Body() createDailyClass: DailyClassDto) {
        return await this.dailyClassService.create(createDailyClass);
    }

    @Put()
    async changeDailyClassInfo() {
        return 'this is dailyclass info change uri';
    }
}
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
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery } from '@nestjs/swagger';

@Controller('dailyclass')
@ApiTags('DAILY class 관련 API')
export class DailyClassController {
    constructor(private dailyClassService: DailyClassService ) {}

    @Get('all')
    @ApiOperation({ summary: 'DAILY-CLASS 도메인 연결 테스트용 API', description: 'DB에 저장되어 있는 전체 내용 반환합니다.' })
	@ApiResponse( { status : 200, description : "배열 형태 반환", type: DailyClass} )
    findAll() {
        return this.dailyClassService.findAll();
    }

    @Get()
    @ApiOperation({ summary: 'DAILY-CLASS 도메인 찾기 API', description: 'id (auto increment) 값에 따라 DB에 저장되어 있는 내용 반환합니다.' })
    @ApiQuery({ type: "number", description: "과목의 고유 id를 querystring 형태로 넣어주세요." })
	@ApiResponse( { status : 200, description : "배열 형태 반환", type: DailyClass} )
    findByDailyClassId(@Query('id') subject_id: number) {
        return this.dailyClassService.findAllbySubjectId(subject_id);
    }

    @Post()
    @ApiOperation({ summary: 'DAILY-CLASS 생성 API', description: '클래스 생성 API 입니다.' })
	@ApiBody({ type: DailyClassDto })
	@ApiResponse( { status : 200, description : "생성된 내용 반환", type: DailyClass} )
    async createDailyClass(@Body() createDailyClass: DailyClassDto) {
        return await this.dailyClassService.create(createDailyClass);
    }
}
import {
	Controller,
	Get,
	Post,
	Body,
    Put,
	Param,
    Query,
	Delete,
	// Query
} from '@nestjs/common';
import { DailyClassDto } from './dto/daily-class.dto';
import { DailyClassService } from './daily-class.service';
import { DailyClass } from './entities/daily-class.model';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery } from '@nestjs/swagger';
import { DailyFeedbackDto } from './dto/daily-feedback.dto';
import { DailyReviewDto } from './dto/daily-review.dto';

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
    @ApiOperation({ summary: 'subject_id에 따른 DAILY-CLASS  찾기 API', description: 'id (auto increment) 값에 따라 DB에 저장되어 있는 내용 반환합니다.' })
    @ApiQuery({ type: "number", description: "과목의 고유 id를 querystring 형태로 넣어주세요." })
	@ApiResponse( { status : 200, description : "배열 형태 반환", type: DailyClass} )
    findAllDailyClass(@Query('subject-id') subjectId: number) {
        return this.dailyClassService.findAllbySubjectId(subjectId);
    }

    @Post()
    @ApiOperation({ summary: 'DAILY-CLASS 생성 API', description: '클래스 생성 API 입니다.' })
	@ApiBody({ type: DailyClassDto })
	@ApiResponse( { status : 200, description : "생성된 내용 반환", type: DailyClass} )
    async createDailyClass(@Body() createDailyClass: DailyClassDto) {
        return await this.dailyClassService.create(createDailyClass);
    }

    /**
     * DailyReviewDto를 이용해서 코멘트와 difficulty를 변경한다.
     */
    @Put('feedback')
    @ApiOperation({ summary: 'DAILY-CLASS 피드백 수정 API', description: '데이터 베이스 변경 API 입니다.' })
	@ApiBody({ type: DailyFeedbackDto })
	@ApiResponse( { status : 200, description : "생성된 내용 반환", type: 'number'} )
    async changeDailyClassFeedback(@Body() feedbackDto: DailyFeedbackDto) {
        return await this.dailyClassService.changeFeedback(feedbackDto);
    }

    /**
     * DailyFeedbackDto 를 이용해서 변경 api 를 변경한다.
     */
    @Put('review')
    @ApiOperation({ summary: 'DAILY-CLASS 피드백 수정 API', description: '데이터 베이스 변경 API 입니다.' })
	@ApiBody({ type: DailyReviewDto })
	@ApiResponse( { status : 200, description : "생성된 내용 반환", type: 'number'} )
    async changeDailyClassReview(@Body() reviewDto: DailyReviewDto) {
        return await this.dailyClassService.changeReview(reviewDto);
    }

    @Delete()
    @ApiOperation({ summary: 'DAILY-CLASS id를 이용한 제거 API', description: 'DB에 저장되어 데이터를 삭제합니다.' })
    async deleteDailyClass(@Query('id') dailyClassId: number) {
        return await this.dailyClassService.delete(dailyClassId);
    }

}
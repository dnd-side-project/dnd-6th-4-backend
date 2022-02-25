import {
	Controller,
	Get,
	Post,
	Body,
    Put,
	// Patch,
	Param,
    Query,
    Delete
	// Delete,
	// Query
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectDto } from './dto/subject.dto';
import { Subject } from './entities/subject.model';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery } from '@nestjs/swagger';

@Controller('subject')
@ApiTags('클래스 관련 API')
export class SubjectController {
    constructor(private subjectService: SubjectService) {}

    @Get('all')
    @ApiOperation({ summary: 'SUBJECT 도메인 연결 테스트용 API', description: 'DB에 저장되어 있는 전체 내용 반환합니다.' })
	@ApiResponse( { status : 200, description : "배열 형태 반환", type: Subject} )
    findAll() {
        return this.subjectService.findAll();
    }

    @Get()
    @ApiOperation({ summary: 'SUBJECT 도메인 찾기 API', description: 'id (auto increment) 값에 따라 DB에 저장되어 있는 내용 반환합니다.' })
    @ApiQuery({ type: "number", description: "과목의 고유 id를 querystring 형태로 넣어주세요." })
	@ApiResponse( { status : 200, description : "배열 형태 반환", type: Subject} )
    findByClassId(@Query() queryString: any) {
        return this.subjectService.findOneByTeacherId(queryString.id);
    }

    @Post()
    @ApiOperation({ summary: 'SUBJECT 생성 API', description: '클래스 생성 API 입니다.' })
	@ApiBody({ type: SubjectDto })
	@ApiResponse( { status : 200, description : "생성된 내용 반환", type: Subject} )
    async createSubject(@Body() createSubjectDto: SubjectDto) {
        return await this.subjectService.create(createSubjectDto);
    }

    @Delete()
    async deleteSubject(@Query('id') subjectId: number) {
        return await this.subjectService.deleteSubjectById(subjectId);
    }

}
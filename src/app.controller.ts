import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller()
@ApiTags('Hello World API')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@ApiOperation({ summary: '서버 연결 테스트용 API', description: 'Hello World string 반환' })
	@ApiResponse( { status : 200, description : "Hello World!" } )
	getHello(): string {
		return this.appService.getHello();
	}
}

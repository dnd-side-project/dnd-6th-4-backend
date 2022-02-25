import {
	Controller,
	Get,
	Post,
	Body,
	// Patch,
	Param,
	Put
	// Delete,
	// Query
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
import { User } from './entities/user.model';
import { UserChangeDto } from './dto/user-change.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('user')
@ApiTags('USER 관련 API')
export class UserController {
	constructor(private userService: UserService) {}

	@Get('all')
	@ApiOperation({ summary: 'USER 도메인 연결 테스트용 API', description: 'DB에 저장되어 있는 전체 내용 반환합니다.' })
	@ApiResponse( { status : 200, description : "배열 형태 반환", type: User} )
	findAll(): Promise<User[]> {
		return this.userService.findAll();
	}

	@Post()
	@ApiOperation({ summary: 'USER 생성 API', description: '계정 생성 API 입니다.' })
	@ApiBody({ type: UserCreateDto })
	@ApiResponse( { status : 200, description : "생성된 내용 반환", type: User} )
	async create(@Body() createUserDto: UserCreateDto): Promise<any> {
		return await this.userService.create(createUserDto);
	}

	@Get(':email')
	@ApiOperation({ summary: 'USER 정보 찾는 API', description: 'email 주소를 이용한 계정 찾기 API 입니다.' })
	@ApiResponse( { status : 200, description : "생성된 내용 반환", type: User} )
	findOne(@Param('email') email: string): Promise<User> {
		return this.userService.findOne(email);
	}
	
	@Put('name')
	@ApiOperation({ summary: 'USER 이름 변경 API', description: '계정 id(auto increment) 를 이용한 이름 변경 API 입니다.' })
	@ApiBody({ type: UserChangeDto })
	@ApiResponse( { status : 200, description : "변경 갯수 반환", type: 'number'} )
	async changeName(@Body() changeUserDto: UserChangeDto) {
		return await this.userService.changeUserName(changeUserDto);
	}

	@Put('password')
	@ApiOperation({ summary: 'USER 비밀번호 변경 API', description: '계정 id(auto increment) 를 이용한 비밀번호 변경 API 입니다.' })
	@ApiBody({ type: UserChangeDto })
	@ApiResponse( { status : 200, description : "변경 갯수 반환", type: 'number'} )
	async changePassword(@Body() changeUserDto: UserChangeDto) {
		return await this.userService.changeUserPassword(changeUserDto);
	}

	@Put('phone-num')
	@ApiOperation({ summary: 'USER 핸드폰 번호 변경 API', description: '계정 id(auto increment) 를 이용한 번호 변경 API 입니다.' })
	@ApiBody({ type: UserChangeDto })
	@ApiResponse( { status : 200, description : "변경 갯수 반환", type: 'number'} )
	async changePhoneNumber(@Body() changeUserDto: UserChangeDto) {
		return await this.userService.changeUserPhoneNumber(changeUserDto);
	}

	@Put('contact-time')
	@ApiOperation({ summary: 'USER 연락가능시간 변경 API', description: '계정 id(auto increment) 를 이용한 연락가능시간 변경 API 입니다.' })
	@ApiBody({ type: UserChangeDto })
	@ApiResponse( { status : 200, description : "변경 갯수 반환", type: 'number'} )
	async changeContactTime(@Body() changeUserDto: UserChangeDto) {
		return await this.userService.changeContactTime(changeUserDto);
	}
}

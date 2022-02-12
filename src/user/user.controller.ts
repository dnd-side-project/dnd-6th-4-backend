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
import { UserService } from './user.service';
import { UserRequestDto } from './dto/user-request.dto';

@Controller('user')
export class UserController {
    // constructor() {}
	constructor(private readonly userService: UserService) {}

	@Get()
	findUserById(@Query('email') email: string) {
		return this.userService.findByEmail(email) ?? `${email} is not exist`;
	}
	
	@Get('all')
	findAllUser() {
		return this.userService.findAll();
	}

	@Post()
	async addUser(@Body() userDto: UserRequestDto) {
		this.userService.addUser(userDto);
		return userDto.getEmail();
	}
}

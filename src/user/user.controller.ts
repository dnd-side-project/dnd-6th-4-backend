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

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get('all')
	findAll() {
		return this.userService.findAll();
	}

	@Post()
	async create(@Body() createUserDto: UserCreateDto): Promise<any> {
		return await this.userService.create(createUserDto);
		// return "reponse test finish";
	}

	@Get(':email')
	findOne(@Param('email') email: string): Promise<User> {
		return this.userService.findOne(email);
	}
	
	@Put('name')
	changeName(@Body() changeUserDto: UserChangeDto) {
		console.log(changeUserDto);
		return 'change name';
	}

	@Put('password')
	changePassword(@Body() changeUserDto: UserChangeDto) {
		console.log(changeUserDto);
		return 'change password';
	}

	@Put('phone-num')
	changePhoneNumber(@Body() changeUserDto: UserChangeDto) {
		console.log(changeUserDto);
		return 'change phone number';
	}
}

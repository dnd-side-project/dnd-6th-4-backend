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
	constructor(private userService: UserService) {}
	@Get('all')
	findAll() {
		return this.userService.findAll();
	}
}

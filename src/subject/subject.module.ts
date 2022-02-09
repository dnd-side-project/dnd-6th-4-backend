import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';

@Module({
	controllers: [SubjectController]
	// providers: [UserService]
})
export class SubjectModule {}

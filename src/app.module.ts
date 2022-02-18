import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SubjectModule } from './subject/subject.module';

@Module({
	imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, SubjectModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}

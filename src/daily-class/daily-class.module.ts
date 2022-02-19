import { Module } from '@nestjs/common';
import { DailyClassController } from './daily-class.controller';
// import { SubjectService } from './subject.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyClass } from './entities/daily-class.model';

@Module({
    imports: [TypeOrmModule.forFeature([DailyClass])],
    controllers: [DailyClassController],
    providers: [],
    exports: []
})

export class DailyClassModule {}

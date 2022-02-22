import { Module } from '@nestjs/common';
import { DailyClassController } from './daily-class.controller';
import { DailyClassService } from './daily-class.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyClass } from './entities/daily-class.model';

@Module({
    imports: [TypeOrmModule.forFeature([DailyClass])],
    controllers: [DailyClassController],
    providers: [DailyClassService],
    exports: [DailyClassService]
})

export class DailyClassModule {}

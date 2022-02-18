import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';

@Module({
    imports: [],
    controllers: [SubjectController],
    providers: [],
    exports: []
})

export class SubjectModule {}

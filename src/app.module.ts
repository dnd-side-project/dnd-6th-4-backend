import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './sample/sample.module';

@Module({
	imports: [SampleModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}

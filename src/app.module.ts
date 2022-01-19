import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [SampleModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}

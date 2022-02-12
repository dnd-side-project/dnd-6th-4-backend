import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// swagger
	const config = new DocumentBuilder()
		.setTitle('Ping pong')
		.setDescription('The ping pong API description')
		.setVersion('0.0')
		.addTag('1st')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);


	await app.listen(3000);
}
bootstrap();

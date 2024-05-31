import { HttpService } from './core/services/http.service';
import { CarsService } from './services';
import { CustomErrorResponse } from './core/responses/defaultErrorResponse';
import { LoggerService } from './core/services/logger/logger.service';
import { LoggingMiddleware } from './core/middleware/loggingMiddleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CarsController } from './controllers';

@Module({
  imports: [CustomErrorResponse],
  controllers: [CarsController],
  providers: [CarsService,  HttpService, LoggerService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}

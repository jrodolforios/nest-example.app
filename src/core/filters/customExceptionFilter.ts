import { Catch, ArgumentsHost } from '@nestjs/common';
import { CustomErrorResponse } from '../responses/defaultErrorResponse';
import { LoggerService } from '../services/logger/logger.service';

@Catch()
export class CustomExceptionFilter {
  constructor(private loggerService: LoggerService) {}
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    this.loggerService.error("Exception", exception?.response?.data)
    let errorResponse = exception.response;
    if (errorResponse?.statusCode == null && exception.response != null) {
      let errorResponseInvalidation = exception.response.data as CustomErrorResponse;
      errorResponse.statusCode = errorResponseInvalidation?.StatusCode;
      errorResponse.data = errorResponseInvalidation?.Message;
      errorResponse.message = errorResponseInvalidation?.Message;
      response.status(errorResponse.statusCode).json(errorResponseInvalidation);
    }
    else
      response.status(500).json({message: exception.message, stack: exception.stack});
  }
}
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';

@Catch(Error) // Capture toutes les erreurs génériques
export class CustomExceptionFilter implements ExceptionFilter {
  constructor(private readonly errorHandlerService: ErrorHandlerService) {}

  catch(exception: Error, host: ArgumentsHost) {
    console.log('CustomExceptionFilter is triggered');

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
    }

    this.errorHandlerService.logError(exception);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      details:
        exception instanceof HttpException
          ? exception.getResponse()
          : undefined,
    });
  }
}

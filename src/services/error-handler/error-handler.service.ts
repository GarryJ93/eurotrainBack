import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ErrorHandlerService {
  logError(error: Error): void {
    if (error instanceof HttpException) {
      this.handleHttpException(error);
    } else if (error instanceof Error) {
      console.error('Unexpected Error:', error);
    } else {
      console.error('Unexpected Error:', error);
    }
  }

  private handleHttpException(error: HttpException): void {
    const status = error.getStatus();

    if (this.isClientError(status)) {
      console.error(`Client Error (Status ${status}):`, error.message);
    } else if (this.isServerError(status)) {
      console.error(`Server Error (Status ${status}):`, error.message);
    } else {
      console.error(
        `Unexpected HTTP Status Code (Status ${status}):`,
        error.message,
      );
    }
  }

  private isClientError(status: number): boolean {
    return (
      status >= HttpStatus.BAD_REQUEST &&
      status < HttpStatus.INTERNAL_SERVER_ERROR
    );
  }

  private isServerError(status: number): boolean {
    return (
      status >= HttpStatus.INTERNAL_SERVER_ERROR &&
      status < HttpStatus.BAD_GATEWAY
    );
  }
}

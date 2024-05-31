import { Injectable } from '@nestjs/common';
import pino from 'pino';

@Injectable()
export class LoggerService {
    private readonly logger = pino({
        level: process.env.VERBOSITY == null ? 'info' : process.env.VERBOSITY,
    });

    log<T>(message: string, data?: T) {
        this.logger.info(this.formatMessage(message, data));
      }
    
      error<T>(message: string, data?: T, trace?: string) {
        this.logger.error(this.formatMessage(message, data, trace));
      }
    
      warn<T>(message: string, data?: T) {
        this.logger.warn(this.formatMessage(message, data));
      }
    
      debug<T>(message: string, data?: T) {
        this.logger.debug(this.formatMessage(message, data));
      }
    
      verbose<T>(message: string, data?: T) {
        this.logger.trace(this.formatMessage(message, data));
      }

      private formatMessage<T>(message: string, data?: T, trace?: string): object {
        const logObject: { message: string; data?: T; trace?: string } = { message };
        if (data) {
          logObject.data = data;
        }
        if (trace) {
          logObject.trace = trace;
        }
        return logObject;
      }
}

import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`),
  ),
  transports: [new winston.transports.Console()],
});

export class Logger {
  static info(message: string) {
    logger.info(message);
  }

  static error(message: string) {
    logger.error(message);
  }

  static warn(message: string) {
    logger.warn(message);
  }
}

// import winston, { format } from 'winston';
// import path from 'path';

// const logDir = path.join(__dirname, '..', 'logs');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   defaultMeta: { service: 'invoice-management-system' },
//   transports: [
//     new winston.transports.File({
//       filename: path.join(logDir, 'error.log'),
//       level: 'error',
//       format: format.combine(
//         format.timestamp(),
//         format.json()
//       ),
//     }),
//     new winston.transports.File({
//       filename: path.join(logDir, 'combined.log'),
//       format: format.combine(
//         format.timestamp(),
//         format.json()
//       ),
//     }),
//   ],
// });

// if (process.env.NODE_ENV !== 'production') {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.simple()
//       ),
//     })
//   );
// }

// // Create a stream object for Morgan logging
// const stream = {
//   write: (message: string) => {
//     logger.info(message.trim());
//   },
// };

// export { logger, stream };
import { Injectable, NestMiddleware } from '@nestjs/common';
import uuidV4 from "uuid/v4";

/**
 * @param genFn a function that generates a suitable (random) correlation ID.
 */
export function CorrelationIdMiddleware(genFn: () => string = uuidV4) {
  return (req: any, res: any, next: () => void) => {
    const correlationHeader = req.header("x-correlation-id") || genFn();
    req.headers["X-Correlation-Id"] = correlationHeader;
    res.set("X-Correlation-Id", correlationHeader);
    next();
  }
}

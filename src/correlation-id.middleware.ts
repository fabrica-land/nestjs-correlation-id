import { Injectable, NestMiddleware } from '@nestjs/common';
import uuid from "uuid";

/**
 * @param genFn a function that generates a suitable (random) correlation ID.
 */
export function CorrelationIdMiddleware(genFn: () => string = uuid.v4) {
  return (req: any, res: any, next: () => void) => {
    const correlationHeader = req.header("x-correlation-id") || genFn();
    // make sure this is lower-cased, otherwise downstream stuff will barf.
    req.headers["x-correlation-id"] = correlationHeader;
    res.set("X-Correlation-Id", correlationHeader);
    next();
  }
}

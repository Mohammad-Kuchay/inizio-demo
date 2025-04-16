import { inject } from "inversify";
import { TYPES } from "@neudesic/inizio-app-builder";

/**
 * Inversify Decorator for Mediator to be used without Injecting in Constructor.
 *
 * e.g. In Controllers.
 */
export const mediator = inject(TYPES.Mediator);

/**
 * Inversify Decorator for Context Manager Object to be used without Injecting in Constructor.
 */
export const requestContextManager = inject(TYPES.RequestContextManager);

/**
 * Inversify Decorator for Inizio Logger to be used without Injecting in Constructor.
 */
export const logger = inject(TYPES.Logger);

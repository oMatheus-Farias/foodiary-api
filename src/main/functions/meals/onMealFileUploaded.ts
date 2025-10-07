import 'reflect-metadata';

import { Registry } from '@kernel/di/Registry';
import { MealUploadedFileEventHandler } from '@application/events/files/MealUploadedFileEventHandler';
import { lambdaS3Adapter } from '@main/adapters/lambdaS3Adapter';

const eventHandler = Registry.getInstance().resolver(MealUploadedFileEventHandler);

export const handler = lambdaS3Adapter(eventHandler);

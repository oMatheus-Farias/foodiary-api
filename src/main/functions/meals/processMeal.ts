import 'reflect-metadata';

import { MealsQueueConsumer } from '@application/queues/MealsQueueConsumer';
import { Registry } from '@kernel/di/Registry';
import { lambdaSQSAdapter } from '@main/adapters/lambdaSQSAdapter';

const consumer = Registry.getInstance().resolver(MealsQueueConsumer);

export const handler = lambdaSQSAdapter(consumer);

import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { HelloController } from '@application/controllers/HelloController';
import { Registry } from '@kernel/di/Registry';

const controller = Registry.getInstance().resolver(HelloController);

export const handler = lambdaHttpAdapter(controller);

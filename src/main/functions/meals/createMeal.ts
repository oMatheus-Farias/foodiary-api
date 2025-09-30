import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { Registry } from '@kernel/di/Registry';
import { CreateMealController } from '@application/controllers/meals/CreateMealController';

const controller = Registry.getInstance().resolver(CreateMealController);

export const handler = lambdaHttpAdapter(controller);

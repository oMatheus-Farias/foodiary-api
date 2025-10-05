import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { Registry } from '@kernel/di/Registry';
import { GetMealByIdController } from '@application/controllers/meals/GetMealByIdController';

const controller = Registry.getInstance().resolver(GetMealByIdController);

export const handler = lambdaHttpAdapter(controller);

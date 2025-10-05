import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { Registry } from '@kernel/di/Registry';
import { ListMealsByDayController } from '@application/controllers/meals/ListMealsByDayController';

const controller = Registry.getInstance().resolver(ListMealsByDayController);

export const handler = lambdaHttpAdapter(controller);

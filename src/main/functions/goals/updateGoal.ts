import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { Registry } from '@kernel/di/Registry';
import { UpdateGoalController } from '@application/controllers/goals/UpdateGoalController';

const controller = Registry.getInstance().resolver(UpdateGoalController);

export const handler = lambdaHttpAdapter(controller);

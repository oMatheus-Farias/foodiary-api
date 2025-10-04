import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { Registry } from '@kernel/di/Registry';
import { GetMeController } from '@application/controllers/accounts/GetMeController';

const controller = Registry.getInstance().resolver(GetMeController);

export const handler = lambdaHttpAdapter(controller);

import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { GetMeController } from '@application/controllers/accounts/GetMeController';

export const handler = lambdaHttpAdapter(GetMeController);

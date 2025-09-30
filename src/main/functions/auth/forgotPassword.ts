import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { Registry } from '@kernel/di/Registry';
import { ForgotPasswordController } from '@application/controllers/auth/ForgotPasswordController';

const controller = Registry.getInstance().resolver(ForgotPasswordController);

export const handler = lambdaHttpAdapter(controller);

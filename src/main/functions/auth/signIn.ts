import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { Registry } from '@kernel/di/Registry';
import { SignInController } from '@application/controllers/auth/SignInController';

const controller = Registry.getInstance().resolver(SignInController);

export const handler = lambdaHttpAdapter(controller);

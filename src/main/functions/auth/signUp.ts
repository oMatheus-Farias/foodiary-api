import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { SignUpController } from '@application/controllers/auth/SignUpController';
import { Registry } from '@kernel/di/Registry';

const controller = Registry.getInstance().resolver(SignUpController);

export const handler = lambdaHttpAdapter(controller);

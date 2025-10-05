import 'reflect-metadata';

import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { Registry } from '@kernel/di/Registry';
import { UpdateProfileController } from '@application/controllers/profiles/UpdateProfileController';

const controller = Registry.getInstance().resolver(UpdateProfileController);

export const handler = lambdaHttpAdapter(controller);

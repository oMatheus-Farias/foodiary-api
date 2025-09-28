import { Injectable } from '@kernel/decorators/Injectable';
import { CreateMealUseCase } from './CreateMealUseCase';

@Injectable()
export class HelloUseCase {
  constructor(private readonly createMealUseCase: CreateMealUseCase) {}

  async execute({ email }: HelloUseCase.Input): Promise<HelloUseCase.Output> {
    return {
      helloUseCase: email,
      data: await this.createMealUseCase.execute(),
    };
  }
}

export namespace HelloUseCase {
  export type Input = {
    email: string;
  };

  export type Output = {
    helloUseCase: string;
    data: any;
  };
}

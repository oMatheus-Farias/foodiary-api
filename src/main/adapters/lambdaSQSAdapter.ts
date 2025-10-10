import { IQueueConsumer } from '@application/contracts/IQueueConsumer';
import { SQSHandler } from 'aws-lambda';
import { Registry } from '@kernel/di/Registry';
import { Constructor } from '@shared/types/Constructor';

export function lambdaSQSAdapter(queueConsumerImpl: Constructor<IQueueConsumer<any>>): SQSHandler {
  return async (event) => {
    const queueConsumer = Registry.getInstance().resolver(queueConsumerImpl);

    await Promise.all(
      event.Records.map(async (record) => {
        const message = JSON.parse(record.body);

        await queueConsumer.process(message);
      })
    );
  };
}

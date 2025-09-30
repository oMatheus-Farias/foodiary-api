import { CustomMessageTriggerEvent } from 'aws-lambda';

export async function handler(event: CustomMessageTriggerEvent) {
  if (event.triggerSource === 'CustomMessage_ForgotPassword') {
    const confirmationCode = event.request.codeParameter;

    event.response.emailSubject = '🍏 foodiary | Recupere a sua conta';
    event.response.emailMessage = `O seu código de recuperação é: ${confirmationCode}`;
  }

  return event;
}

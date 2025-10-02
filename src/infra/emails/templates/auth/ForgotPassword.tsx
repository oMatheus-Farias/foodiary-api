import { Column } from '@react-email/column';
import { Heading } from '@react-email/heading';
import { Html } from '@react-email/html';
import { Row } from '@react-email/row';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

import * as React from 'react';
import { TailwindConfig } from '@infra/emails/components/TailwindConfig';

interface IForgotPasswordProps {
  confirmationCode: string;
}

export default function ForgotPassword({ confirmationCode }: IForgotPasswordProps) {
  return (
    <TailwindConfig>
      <Html className="font-sans">
        <Section>
          <Row>
            <Column className="text-center">
              <Heading as="h1" className="text-2xl mt-6">
                Recupere a sua conta
              </Heading>
              <Heading as="h2" className="font-normal text-base text-foodiary-gray-600 leading-[0]">
                Resete a sua senha e volte ao foco 💪
              </Heading>
            </Column>
          </Row>

          <Row>
            <Column className="text-center">
              <span className="bg-gray-200 inline-block px-8 py-4 text-3xl rounded-lg font-bold tracking-[16px] mt-6">
                {confirmationCode}
              </span>
            </Column>
          </Row>

          <Row>
            <Column>
              <Text className="text-sm mx-auto mt-10 text-foodiary-gray-600 max-w-[320px] text-center">
                Se você não solicitou esta troca, fique tranquilo(a), sua conta continua segura.
              </Text>
            </Column>
          </Row>
        </Section>
      </Html>
    </TailwindConfig>
  );
}

ForgotPassword.PreviewProps = {
  confirmationCode: '123456',
};

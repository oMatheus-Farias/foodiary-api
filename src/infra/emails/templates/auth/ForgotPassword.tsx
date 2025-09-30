import { Button, Html, Tailwind } from '@react-email/components';
import * as React from 'react';

export default function ForgotPassword() {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                foodiary: {
                  green: '#64a30d',
                },
              },
            },
          },
        }}
      >
        <Button
          href="https://example.com"
          style={{ color: '#fff', padding: '12px 20px' }}
          className="bg-foodiary-green"
        >
          Clica aqui
        </Button>
      </Tailwind>
    </Html>
  );
}

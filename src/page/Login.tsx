import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from 'radix-ui';

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is Required' })
    .email('Please enter a valid email address'),
  password: z.string({ required_error: 'Password is Required' }),
});

const Login: React.FC = () => {
  // DEFINE HOOK
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  // API CALL

  return (
    <Form.Root>
      <Form.Field name='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control asChild>
          <input type='email' />
        </Form.Control>
      </Form.Field>

      <Form.Field name='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control asChild>
          <input type='password' />
        </Form.Control>
      </Form.Field>

      <Form.Submit />
    </Form.Root>
  );
};

export default Login;

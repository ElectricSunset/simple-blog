import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from 'radix-ui';
import { Button } from '@/components/ui/button';

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is Required' })
    .email('Please enter a valid email address'),
  password: z.string({ required_error: 'Password is Required' }),
});

const Login: React.FC = () => {
  // DEFINE HOOK
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  // API CALL

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='bg-white p-6 border-1 border-neutral-200 rounded-2xl space-y-5 m-12 w-full sm:w-90 '>
        <h1>Sign In</h1>
        <Form.Root className='space-y-5'>
          <Form.Field name='email' className='space-y-1 flex flex-col'>
            <Form.Label className='text-sm font-semibold font-neutral-950'>
              Email
            </Form.Label>
            <Form.Control asChild>
              <input
                placeholder='Enter your email'
                type='email'
                className='py-2.5 px-4 border-neutral-300 border-1 rounded-2xl text-sm font-regular font-neutral-500'
              />
            </Form.Control>
          </Form.Field>

          <Form.Field name='password' className='space-y-1 flex flex-col'>
            <Form.Label className='text-sm font-semibold font-neutral-950'>
              Password
            </Form.Label>
            <div className='border-neutral-300 rounded-2xl border-1 w-full flex-between py-2.5 px-4  '>
              <Form.Control asChild>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='w-full text-sm font-regular font-neutral-500'
                />
              </Form.Control>
              <img
                src='../../Icons/eye-icon.svg'
                alt='Show password'
                className='w-4 h-3 shrink-0 cursor-pointer'
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(false)}
                onTouchStart={() => setShowPassword(true)}
                onTouchEnd={() => setShowPassword(false)}
              />
            </div>
          </Form.Field>

          <Form.Submit className='w-full'>
            <Button>Login</Button>
          </Form.Submit>
        </Form.Root>
        <p className='text-sm font-regular font-neutral-950'>
          {"Don't have an account?"}{' '}
          <a
            href='#'
            className=' font-semibold text-sm font-primary-300 hover:underline'
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

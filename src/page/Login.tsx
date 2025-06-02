import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { authLogin } from '@/services/authentication';
import { useDispatch } from 'react-redux';
import { setToken } from '@/state/authSlice';
import StatusDialog from '@/components/ui/status-dialog';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is Required')
    .email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is Required'),
});

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const response = await authLogin(data.email, data.password);
      dispatch(setToken(response.token));
      form.reset();
    } catch (err) {
      console.error('Login failed:', err);
      setShowDialog(true);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='bg-white p-6 border-1 border-neutral-200 rounded-2xl space-y-5 m-12 w-90 '>
        <h1>Sign In</h1>

        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-1 flex flex-col'>
                  <FormLabel className='text-sm font-semibold font-neutral-950'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Enter your email'
                      type='email'
                      className='py-2.5 px-4 border-neutral-300 border-1 rounded-2xl text-sm font-regular font-neutral-500'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-1 flex flex-col'>
                  <FormLabel className='text-sm font-semibold font-neutral-950'>
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className='border-neutral-300 rounded-2xl border-1 w-full flex-between py-2.5 px-4 gap-1'>
                      <Input
                        {...field}
                        placeholder='Enter your password'
                        type={showPassword ? 'text' : 'password'}
                        className='w-full text-sm font-regular font-neutral-500'
                      />
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Login</Button>
          </form>
        </Form>
        <p className='text-sm font-regular font-neutral-950'>
          {"Don't have an account? "}
          <a
            href='#'
            className=' font-semibold text-sm font-primary-300 hover:underline'
          >
            Register
          </a>
        </p>
        <StatusDialog
          open={showDialog}
          onClose={() => {
            setShowDialog(false);
          }}
        ></StatusDialog>
      </div>
    </div>
  );
};

export default Login;

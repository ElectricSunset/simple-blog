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
import { useNavigate, Link } from 'react-router-dom';

const registerSchema = z
  .object({
    name: z.string().min(1, 'Name is Required'),
    email: z
      .string()
      .min(1, 'Email is Required')
      .email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is Required'),
    confirmPassword: z.string().min(1, 'Password is Required'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      });
    }
  });

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      const response = await authLogin(data.email, data.password);
      dispatch(setToken(response.token));
      form.reset();
      navigate('/');
    } catch (err) {
      console.error('Register failed:', err);
      setShowDialog(true);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='bg-white p-6 border-1 border-neutral-200 rounded-2xl space-y-5 m-12 w-100 '>
        <h1>Sign Up</h1>

        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='space-y-1 flex flex-col'>
                  <FormLabel className='text-sm font-semibold font-neutral-950'>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Enter your name'
                      type='text'
                      className='py-2.5 px-4 border-neutral-300 border-1 rounded-2xl text-sm font-regular font-neutral-500'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem className='space-y-1 flex flex-col'>
                  <FormLabel className='text-sm font-semibold font-neutral-950'>
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className='border-neutral-300 rounded-2xl border-1 w-full flex-between py-2.5 px-4 gap-1'>
                      <Input
                        {...field}
                        placeholder='Enter your confirm password'
                        type={showConfirmPassword ? 'text' : 'password'}
                        className='w-full text-sm font-regular font-neutral-500'
                      />
                      <img
                        src='../../Icons/eye-icon.svg'
                        alt='Show confirm password'
                        className='w-4 h-3 shrink-0 cursor-pointer'
                        onMouseDown={() => setShowConfirmPassword(true)}
                        onMouseUp={() => setShowConfirmPassword(false)}
                        onMouseLeave={() => setShowConfirmPassword(false)}
                        onTouchStart={() => setShowConfirmPassword(true)}
                        onTouchEnd={() => setShowConfirmPassword(false)}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit'>Register</Button>
          </form>
        </Form>
        <p className='text-sm font-regular font-neutral-950 justify-center flex gap-1'>
          {'Already have an account?'}
          <Link
            to='/login'
            className=' font-semibold text-sm font-primary-300 hover:underline'
          >
            Login
          </Link>
        </p>
        <StatusDialog
          title={"There's Some Error!"}
          description='Please Try Again Later'
          open={showDialog}
          onClose={() => {
            setShowDialog(false);
          }}
        ></StatusDialog>
      </div>
    </div>
  );
};

export default Register;

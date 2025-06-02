import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navigation: React.FC = () => {
  return (
    <div className='px-30 border-b border-neutral-300'>
      <nav className='flex-between py-4'>
        <img src='../../Icons/logo-symbol.svg' className='w-40 h-9' />
        <div className='py-3 px-4 flex justify-start border-1 border-neutral-300 rounded-xl gap-2 w-93.25'>
          <img src='../../Icons/magnifier.svg' className='w-6 h-6' />
          <Input placeholder='Search' />
        </div>
        <div className='flex-center gap-6'>
          <Button variant={'ghost'}>Login</Button>
          <div className='h-6 border-1 border-neutral-300' />
          <Button className='w-45.5'> Register </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

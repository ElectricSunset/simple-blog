import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { store } from '@/state/store';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const userID = store.getState().user.id;
    const savedAvatarUrl = store.getState().user.avatUrl;
    if (userID !== null) {
      setLoggedIn(true);
    }

    if (typeof savedAvatarUrl === 'string') {
      setAvatarUrl(savedAvatarUrl);
    }
  }, []);

  return (
    <div className='px-4 md:px-30 border-b border-neutral-300'>
      <nav className='flex-between py-5 md:py-4'>
        <img
          src='../../Icons/logo-symbol.svg'
          className='w-26.5 h-6 md:w-40 md:h-9 cursor-pointer'
          onClick={() => {
            navigate('/');
          }}
        />
        <div className='py-3 px-4 justify-start border-1 border-neutral-300 rounded-xl gap-2 w-93.25 hidden md:flex ml-5 mr-5'>
          <img
            src='../../Icons/magnifier.svg'
            className='w-6 h-6 hidden md:block'
          />
          <Input
            placeholder='Search'
            className='hidden min-w-20 md:block w-full'
          />
        </div>
        {loggedIn ? (
          <div className='flex-center gap-6'>
            <Button
              variant={'ghost'}
              className='hidden md:block'
              onClick={() => navigate('/login')}
            >
              Write Post
            </Button>
            <div className='h-6 border-1 border-neutral-300 hidden md:block' />
            <Button
              variant={'ghost'}
              className='hidden md:flex-center md:gap-3'
              onClick={() => navigate('/login')}
            >
              <img
                src={avatarUrl}
                className='w-10 h-10 rounded-full border shrink-0'
              />
              <p className='hidden md:block'>{store.getState().user.name}</p>
            </Button>
          </div>
        ) : (
          <>
            <div className='flex-center gap-6'>
              <Button
                variant={'ghost'}
                className='hidden md:block'
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <div className='h-6 border-1 border-neutral-300 hidden md:block' />
              <Button
                className='w-45.5 hidden md:flex'
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
            </div>
            <div className='flex-center gap-6.75'>
              <img
                src='../../Icons/magnifier.svg'
                className='w-4.5 h-4.5 block md:hidden cursor-pointer'
              />
              <img
                src='../../Icons/menu-icon.svg'
                className='w-4.5 h-4.5 block md:hidden cursor-pointer'
              />
            </div>
          </>
        )}
      </nav>
    </div>
  );
};
// Bikin Logicnya
export default Navigation;

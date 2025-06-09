import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useMedia } from 'react-use';
import { store } from '@/state/store';
import { logOut } from '@/services/logOut';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(
    '../../Images/john-doe-avatar.png'
  );
  const isLargeish = useMedia('(min-width: 768px)', false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isLargeish) {
      setOpen(false);
    }
  }, [isLargeish]);

  // Check Login or Not
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
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <img
                    src={avatarUrl}
                    className='w-10 h-10 rounded-full border shrink-0 cursor-pointer'
                  />
                  <p className='hidden md:block text-sm text-neutral-900 no-underline text-nowrap cursor-pointer'>
                    {store.getState().user.name}
                  </p>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem
                    onClick={() => navigate('/profile')}
                    className='cursor-pointer space-x-2.625'
                  >
                    <img
                      src='../../Icons/user-icon.svg'
                      className='w-3.75 h-3.5 shrink-0'
                    />
                    Profile
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => logOut()}
                    className='cursor-pointer space-x-2.625'
                  >
                    <img
                      src='../../Icons/log-out-icon.svg'
                      className='h-3.75 w-4.25 shrink-0'
                    />
                    Logout
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
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
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                  <img
                    src='../../Icons/menu-icon.svg'
                    className='w-4.5 h-4.5 block md:hidden cursor-pointer'
                  />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className='border-b border-neutral-300 py-5 px-4 '>
                      {' '}
                      <img
                        src='../../Icons/logo-symbol.svg'
                        className='w-25 h-6 cursor-pointer '
                        onClick={() => {
                          navigate('/');
                        }}
                      />
                    </SheetTitle>
                    <SheetDescription className='flex-center flex-col gap-4 pt-10'>
                      <Button
                        variant={'ghost'}
                        className='w-53.5 h-11'
                        onClick={() => navigate('/login')}
                      >
                        Login
                      </Button>
                      <Button
                        className='w-53.5 h-11'
                        onClick={() => navigate('/register')}
                      >
                        Register
                      </Button>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};
export default Navigation;

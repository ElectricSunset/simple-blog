import React from 'react';
import Navigation from '@/components/ui/navbar';
import PostsCard, { PostsCard2 } from '@/components/ui/postCard';
import { getPosts } from '@/services/posts';
import { useEffect, useState } from 'react';
import type { ResponsesProps } from '@/components/ui/postCard';

const Home: React.FC = () => {
  const [resp, setResp] = useState<ResponsesProps | null>(null);
  const [mostLikes, setMostLikes] = useState<ResponsesProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const recommendedResponse = await getPosts({ type: 'recommended' });
      setResp(recommendedResponse);
      const mostLikedResponse = await getPosts({
        limits: '3',
        type: 'most-liked',
      });
      setMostLikes(mostLikedResponse);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div className='pt-12 flex px-4 md:px-30'>
        <div className='max-w-201.75'>
          <h2 className='text-display-sm font-bold'>Recommended For You</h2>
          {resp && <PostsCard data={resp.data} />}
        </div>
        <div className='w-0.25 bg-neutral-300 mx-12 hidden md:block'></div>
        <div>
          <h2 className='text-display-xs font-bold hidden md:block'>
            Most Liked
          </h2>
          {mostLikes && <PostsCard2 data={mostLikes.data} />}
        </div>
      </div>
    </>
  );
};

export default Home;

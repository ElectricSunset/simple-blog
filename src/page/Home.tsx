import React from 'react';
import Navigation from '@/components/ui/navbar';
import PostsCard from '@/components/ui/postCard';
import { getRecommendedPost } from '@/services/posts';
import { useEffect, useState } from 'react';
import type { ResponsesProps } from '@/components/ui/postCard';

const Home: React.FC = () => {
  const [data, setData] = useState<ResponsesProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecommendedPost();
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div className='py-30 pt-12 flex'>
        <div>
          <h2>Recommended For You</h2>
          {data && <PostsCard data={data.data} />}
        </div>
        <div className='h-full border'></div>
        <div>
          <h2></h2>
        </div>
      </div>
    </>
  );
};

export default Home;

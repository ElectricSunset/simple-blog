import React from 'react';
import { cn } from '@/lib/utils';

interface TruncatedTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  maxLength = 100,
  className = '',
}) => {
  const truncated =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return <p className={className}>{truncated}</p>;
};

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const responses = {
  data: [
    {
      id: 1,
      title: '5 Reasons to Learn Frontend Development in 2025',
      content:
        "Frontend development is more than just building beautiful user interfaces — it's about crafting user experiences that are fast, accessible, and delightful.",
      tags: ['Programming', 'Frontend', 'Coding'],
      imageUrl: 'https://placecats.com/neo_banana/300/200',
      author: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
      },
      createdAt: '2025-05-27T10:00:00.000Z',
      likes: 20,
      comments: 20,
    },
  ],
  total: 25,
  page: 1,
  lastPage: 3,
};

interface ResponsesData {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imageUrl: string;
  author: {
    id: number;
    name: string;
    email: string;
  };
  createdAt: string;
  likes: number;
  comments: number;
}

export interface ResponsesProps {
  data: ResponsesData[];
  total: number;
  page: number;
  lastPage: number;
}

interface PostsCardProps {
  className?: string;
  data: ResponsesData[];
}

const PostsCard: React.FC<PostsCardProps> = ({ className, data }) => {
  return (
    <div className={className}>
      {data.map((post) => (
        <div key={post.id} className='flex'>
          <img
            src={post.imageUrl}
            alt={post.title}
            className='w-85 h-64.5 rounded-sm my-2.125 mr-6'
          />
          <div className='space-y-4'>
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-bold text-neutral-900'>
                {post.title}
              </h2>
              <div className='flex gap-2'>
                {post.tags.map((tag) => (
                  <p
                    key={`${post.id}.${tag}`}
                    className='text-xs px-2 py-0.5 border rounded-md'
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <TruncatedText
                text={post.content}
                className='text-sm font-regular'
              />
            </div>
            <div className='flex items-center'>
              <img
                src={'../../Images/john-doe-avatar.png'}
                className=' h-10 w-10 rounded-full mr-2'
              />
              <p className='text-sm font-medium'>{post.author.name}</p>
              <div className='h-1 w-1 rounded-full bg-neutral-400 ml-3 mr-3' />
              <p className='text-sm font-regular text-neutral-600'>
                {formatDate(post.createdAt)}
              </p>
            </div>
            <div className='flex space-x-5'>
              <div className='flex items-center gap-1.5'>
                <img src={'../../Icons/like-icon.svg'} alt='like icon' />
                <p className='text-sm text-neutral-600'>{post.likes}</p>
              </div>
              <div className='flex items-center gap-1.5'>
                <img src={'../../Icons/comment-icon.svg'} alt='comment icon' />
                <p className='text-sm text-neutral-600'>{post.comments}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsCard;

import { useMemo } from 'react';
import NextLink from 'next/link';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { ArticleMetaData } from '@lib/api';
import { Blog, BlogDescription, BlogTime, BlogTitle } from './BlogCard-styles';

dayjs.extend(localizedFormat);

const BlogCard: React.FC<ArticleMetaData> = ({
  title,
  date,
  excerpt,
  slug,
  time,
}) => {
  const formateDate = useMemo(() => {
    return dayjs(date).format('ll');
  }, [date]);
  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Blog>
        <BlogTitle>{title}</BlogTitle>
        <BlogDescription>{excerpt}</BlogDescription>
        <BlogTime>
          {formateDate} • {time}
        </BlogTime>
      </Blog>
    </NextLink>
  );
};

export default BlogCard;

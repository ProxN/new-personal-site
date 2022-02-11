import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import NextLink from 'next/link';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { ArticleMetaData } from '@lib/api';
import {
  ArticleAvatar,
  ArticleContainer,
  ArticleContent,
  ArticleHeader,
  ArticleTitle,
  ImageBox,
  ArticleAuthor,
  ArticleText,
  Box,
  Dot,
  Tag,
  Tags,
  Line,
  ArticleMdxContent,
} from './Article-styles';
import { Container } from '@components/Container';

dayjs.extend(localizedFormat);

export interface MdxArticle {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  metadata: ArticleMetaData;
}

export interface ArticleProps {
  data: MdxArticle;
}

const ImageContainer: React.FC<{
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
}> = ({ src, alt, width, height }) => {
  return (
    <ImageBox>
      <Image
        src={src}
        alt={alt}
        layout='responsive'
        objectFit='fill'
        width={width}
        height={height}
      />
    </ImageBox>
  );
};

export const Article: React.FC<ArticleProps> = ({ data }) => {
  const { metadata, source } = data;
  return (
    <ArticleContainer>
      <Container>
        <ArticleTitle>{metadata.title}</ArticleTitle>
        <ArticleContent>
          <ArticleHeader>
            <Box>
              <ArticleAvatar>
                <Image
                  src='/avatar.jpg'
                  alt='Author Profile Pictur'
                  layout='fill'
                  objectFit='cover'
                />
              </ArticleAvatar>
              <ArticleAuthor
                href='https://twitter.com/ProxNN_'
                target='_blank'
                rel='noopener'
              >
                Ayoub
              </ArticleAuthor>
            </Box>
            <Box>
              <ArticleText>{dayjs(metadata.date).format('ll')}</ArticleText>
              <Dot>·</Dot>
              <ArticleText>{metadata.time}</ArticleText>
            </Box>
          </ArticleHeader>
          <ArticleMdxContent>
            <MDXRemote {...source} components={{ ImageContainer }} />
          </ArticleMdxContent>
          <Line />
          <Tags>
            {metadata.tags.map((el) => (
              <li key={el}>
                <NextLink href={`/tags/${el}`} passHref>
                  <Tag>{el}</Tag>
                </NextLink>
              </li>
            ))}
          </Tags>
        </ArticleContent>
      </Container>
    </ArticleContainer>
  );
};

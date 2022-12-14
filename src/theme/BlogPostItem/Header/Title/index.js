import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
export default function BlogPostItemHeaderTitle({className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {permalink, title} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  return (
    <div>
      <TitleHeading className={clsx(styles.title, className)} itemProp="headline">
        {isBlogPostPage ? (
          title
        ) : (
          <Link itemProp="url" to={permalink}>
            {title}
          </Link>
        )}
      </TitleHeading>
      {isBlogPostPage ? undefined : 
       <div><Link itemProp="url" to={permalink}><h3>{metadata.description}</h3></Link><Link itemProp="url" to={permalink}>Continue reading</Link></div>}
    </div>
  );
}

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.content}>
          <p>
            Trout Lake Holdings Ltd is a holding company based in Toronto, Canada.
          </p>
          <p>
            We own and operate&nbsp;<a href="https://cloudgallery.ca" rel="noreferrer" target="_blank">Cloud Gallery</a>, a hybrid art gallery that combines online and gallery spaces to showcase original art inspired by Ontario&apos;s natural beauty.
          </p>
          <p>
            Our aim is to build companies that share the characteristics of&nbsp;<Link href="/blog/the-best-businesses">the best types of businesses</Link>.
          </p>
          <p>
            The name Trout Lake Holdings is inspired by a lake inside a park inside a city. Trout Lake represents the power and the possibility that a place can have to change one&apos;s life.
          </p>
          <p>
            If you&apos;d like to know more, please check out our&nbsp;<Link href="/blog">blog</Link>&nbsp;or&nbsp;<a href="mailto:blake@troutlakeholdings.com">get in touch</a>.
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="We build great businesses.">
      <HomepageHeader />
    </Layout>
  );
}

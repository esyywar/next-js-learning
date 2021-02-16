import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

import { useState } from 'react'

import { getSortedPostsData } from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  const [isNight, setNight] = useState(false)

  return (
    <Layout home night={isNight}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Rahul. I am a firmware validation engineer and avid chess player :)</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        {isNight ? <p>It is night mode!</p> : <p>Day time!</p>}
        <button onClick={() => setNight(!isNight)}>Night Mode</button>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }, ind) => (
            <li className={utilStyles.listItem} key={id}>
              {`Post #${ind + 1}`}
              <br />
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              {id}
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
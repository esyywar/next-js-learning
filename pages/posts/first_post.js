import Head from 'next/head'

import Link from 'next/link'

import Image from 'next/image'

import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <h1>First Post</h1>

            <Image
                src="/images/profile.jpg"
                height={200}
                width={220}
            ></Image>

            <h2><Link href="/"><a>Back to Home</a></Link></h2>
        </Layout>
    )
  }
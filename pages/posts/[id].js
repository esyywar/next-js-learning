import Head from 'next/head'

import Layout from '../../components/layout'
import Date from '../../components/date'

import { getAllPostIds, getPostDataById } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'


export async function getStaticPaths() {
    /* Array of possible ids must have the 'params' key and within that an 'id' key (b/c [id].js) */
    const paths = getAllPostIds()

    return {
        paths,
        /* 
        fallback: false -> 404 error on unreturned paths
        fallback: true -> generates fallback page
        
        Can create custom fallback page at pages/404.js
        */
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostDataById(params.id)

    return {
        props: {
            postData
        }
    }
}

/* 
For dynamic routing we must fill 2 requirements here:
    1. Create js file with [id] (can be 'id' or anything else)
    2. getStaticPaths to reutrn array of possible ids
    3. getStaticProps to get necessary data for each id

Note: access next.js router with useRouter hook from importing 'next/router'
*/
export default function Post({ postData: {title, id, date, contentHtml} }) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>

            <article>
                <h1 className={utilStyles.headingXl}>{title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={date} />
                </div>
                <br />
                <div dangerouslySetInnerHTML={{__html: contentHtml}}></div>
            </article>
        </Layout>
    )
}



import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import LoadingPage from '../../../components/loading/loadingPage';

const Article = dynamic(() => import("../../../components/articles"), { suspense: true });

export default function ArticlePage({ posts }) {

    return (
        <Suspense fallback={<LoadingPage />}>
            <Article posts={posts} />
        </Suspense>
    );

}

export async function getServerSideProps() {

    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    // Pass data to the page via props
    return { props: { posts } }
}

ArticlePage.propTypes = {
    posts: PropTypes.array,
};



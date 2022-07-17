

import { useState } from "react";
import PropTypes from 'prop-types';

import InfiniteScroll from "react-infinite-scroll-component";

import DashboardLayout from '../../components/dashboard/dashboardLayout'
import LoaderInfiniteScroll from './loaderInfiniteScroll';
import ItemsInfiniteScroll from './itemsInfiniteScroll';

export default function Article({ posts }) {

    const [state, setState] = useState(posts.length > 10 ? posts.slice(0, 10) : posts);
    const [hasMore, setHasMore] = useState(posts.length > 10);

    const fetchMoreData = () => {

        if (state.length >= posts.length) {
            setHasMore(false);
            return;
        }
        // a fake async api call like which sends
        // 10 more records in 1 secs
        setTimeout(() => { setState(prevState => (prevState.concat(posts.slice(prevState.length, (prevState.length + 10))))); }, 500);
    };

    return (
        <DashboardLayout>
            <div>
                <div>مقالات</div>
                <div>
                    {
                        <InfiniteScroll
                            dataLength={state.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={<LoaderInfiniteScroll />}
                            height={500}
                            endMessage={<p style={{ textAlign: "center" }}><b>Yay! You have seen it all</b></p>}
                        >
                            <div className='flex flex-wrap'>
                                {state.map((item) => (<ItemsInfiniteScroll key={item.id} item={item} />))}
                            </div>
                        </InfiniteScroll>
                    }
                </div>
            </div>
        </DashboardLayout>
    )
}

Article.propTypes = {
    posts: PropTypes.array,
};
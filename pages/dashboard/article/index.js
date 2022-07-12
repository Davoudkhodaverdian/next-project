


import DashboardLayout from '../../../components/dashboard/dashboardLayout'
import Link from 'next/dist/client/link'
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Article({ posts }) {

    const [state, setState] = useState(posts.slice(0, 10));
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {

        if (state.length >= 100) {
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
                            loader={
                                <div className="relative rounded-xl overflow-auto p-8" dir="ltr">
                                    <div className="flex items-center justify-center">
                                        <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span className="px-3">Processing...</span>
                                        </button>
                                    </div>
                                </div>
                            }
                            height={500}
                            endMessage={
                                <p style={{ textAlign: "center" }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >
                            <div className='flex flex-wrap'>
                                {state.map((item, index) => (
                                    <Link key={index} href='/dashboard/article/[id]' as={`/dashboard/article/${item.id}`}>
                                        <a>
                                            <div key={index} dir="ltr"
                                                className={
                                                    `border border-gray-300 placeholder-gray-500 p-2 m-2 rounded-md w-[100% - 16px] 
                                                 md:w-[330px] md:h-[350px] hover:border-gray-800 shadow hover:shadow-xl 
                                                 transition-all overflow-hidden flex flex-col justify-between`
                                                }>
                                                <div>{item.title}</div>
                                                <div>
                                                    {/* <img src='/images/undraw_control_panel.svg' className='' /> */}
                                                    <img src={`https://picsum.photos/800/600?random=${item.id}`} className='rounded-md shadow' />
                                                </div>
                                                <div className='text-red-700'> id: {item.id}</div>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </InfiniteScroll>
                    }
                </div>
            </div>
        </DashboardLayout>

    );

}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    // Pass data to the page via props
    return { props: { posts } }
}



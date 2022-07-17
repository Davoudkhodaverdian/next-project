
import Link from 'next/dist/client/link'
import PropTypes from 'prop-types';


export default function ItemsInfiniteScroll({ item }) {

    return (
        <Link key={item.id} href='/dashboard/article/[id]' as={`/dashboard/article/${item.id}`}>
            <a>
                <div dir="ltr"
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
    )
}


ItemsInfiniteScroll.propTypes = {
    item: PropTypes.object
};
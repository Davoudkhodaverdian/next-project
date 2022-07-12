import Head from "next/head"
import Header from "./header"

const SingleArticle = ({ posts }) => {

  const { id, title, body } = posts
  
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="m-10 p-5 border border-slate-200 rounded-lg" dir="ltr">
        <div className="flex">
          <div>
            <div>title: {title}</div>
            <div>explanation: {body}</div>
          </div>
          <div>
            {/* <img src='/images/undraw_control_panel.svg' className='' /> */}
            <img src={`https://picsum.photos/800/600?random=${id}`} className='rounded-md shadow' />
          </div>

        </div>

        <div className='text-red-700'> id: {id}</div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {

  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const posts = await res.json()

  // Pass data to the page via props
  return { props: { posts } }
}

export default SingleArticle;

import Head from "next/head"
import Header from "./header"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const SingleArticle = (/* { posts }*/) => { //{ posts } argumunt for commeneted getServerSideProps request, use useEffect instead of it

  const [posts, setPosts] = useState({ id: "", title: "", body: "" })

  const router = useRouter()
  
  const getPosts = async () => {
    
    // Fetch data from external API
    //const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`)
    const data = await res.json();
    const { id, title, body } = data;
    setPosts({ id, title, body });

  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>{posts.title}</title>
      </Head>
      <Header />
      <div className="m-10 p-5 border border-slate-200 rounded-lg" dir="ltr">
        <div className="flex">
          <div>
            <div>title: {posts.title}</div>
            <div>explanation: {posts.body}</div>
          </div>
          <div>
            {/* <img src='/images/undraw_control_panel.svg' className='' /> */}
            <img src={`https://picsum.photos/800/600?random=${posts.id}`} className='rounded-md shadow' />
          </div>

        </div>

        <div className='text-red-700'> id: {posts.id}</div>
      </div>
    </>
  )
}

// export async function getServerSideProps({ params }) {

//   // Fetch data from external API
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//   const posts = await res.json()

//   // Pass data to the page via props
//   return { props: { posts } }
// }

export default SingleArticle;

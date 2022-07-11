

const Posts = ({ posts }) => {

    console.log(posts)
    const { id, title, body } = posts

    return (
        <>
            <div>{title}</div>
            <div>
                This is Posts  page id is {id}
            </div>
            <div>{body} </div>

        </>
    )
}

export async function getServerSideProps({ params }) {

    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const posts = await res.json();
    // Pass data to the page via props
    return { props: { posts } }
}

export default Posts;

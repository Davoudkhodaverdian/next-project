
  import { useRouter } from 'next/router'

  export default function Article() {
  
  
      const router = useRouter()
      const { pid,title } = router.query
  
  
      return (
        <>
        <div>{title}</div>
          <div>
              This is article  page pid is {pid}
          </div>
        </>
      )
  }
  
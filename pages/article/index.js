
  import { useRouter } from 'next/router'

export default function Article() {


    const router = useRouter()
    const { pid } = router.query


    return (
        <div>
            This is article  page {pid ? ("pid is " + pid) : ""}
        </div>
    )
}

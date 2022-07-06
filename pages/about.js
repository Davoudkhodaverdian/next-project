import { useRouter } from 'next/router'





export default function About() {

    const router = useRouter()
    const { pid } = router.query




    return (
        <div>
            This is about  page {pid ? ("pid is " + pid) : ""}
        </div>
    )
}

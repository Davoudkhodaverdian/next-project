import SidebarData from './sidebarData.json'
import Link from 'next/link'

function ProfileItems() {

    return (
        <>
            {SidebarData.map((item,index) => (
                <Link href={item.root ? item.root : "/"} key={item.id}>
                    <a>
                        <div key={item.id}
                            className={`flex p-2 mx-2 hover:text-indigo-800 cursor-pointer rounded-sm active:text-indigo-900 
                                ${index === SidebarData.length - 1 ? "" : "border-b-2"}`}>
                            <span>{item.descreption}</span>
                        </div>
                    </a>
                </Link>
            ))}
        </>
    )
}

export default ProfileItems
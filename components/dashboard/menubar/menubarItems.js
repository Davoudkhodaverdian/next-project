import SidebarData from './sidebarData.json'
import Link from 'next/link'

function MenubarItems() {

    return (
        <>
            {SidebarData.map((item, index) => (
                <Link href={item.root ? item.root : "/"} key={index}>
                    <a>
                        <div key={item.id} className="flex p-2 mx-2 hover:bg-indigo-800 cursor-pointer rounded-sm active:bg-indigo-900">
                            <img src={item.name === "home" ? "/images/home.svg" : "/images/team.svg"} alt={item.name} className="h-6 w-6 mx-2" />
                            <span>{item.descreption}</span>
                        </div>
                    </a>
                </Link>
            ))}
        </>
    )
}

export default MenubarItems
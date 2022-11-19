
export default function LeftMenu() {
    return (
        <aside className="flex-col min-h-screen w-60">
            <div className="">
                <div className="flex px-4 py-3 flex-wrap border-b">
                    <span className="text-sm mx-2 font-thin">Menu data</span>
                </div>
                <div className="overflow-auto transition-all">
                    <div className="flex p-2 m-auto justify-start">
                        <ul className="flex flex-col w-full rounded-md">
                            <li className="my-px hover:bg-indigo-600 hover:text-gray-100 p-1.5">Navlink</li>
                            <li className="my-px hover:bg-indigo-600 hover:text-gray-100 p-1.5">Navlink 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
  }
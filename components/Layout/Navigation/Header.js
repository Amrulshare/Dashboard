
export default function Header() {
    return (
        <div className="flex px-4 py-3 justify-end">
            <div className=" lg:flex-nowrap">
                <div className="flex flex-wrap p-2">
                    <ul className="flex flex-row px-4 py-2 justify-between">
                        <li className="px-1">Header</li>
                        <li className="px-1">NavHeader</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
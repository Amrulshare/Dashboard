import Link from "next/link";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid"
export default function Sidebar() {
    return (
        <>
        <div className="w-20">
            <div className="m-0 flex flex-col flex-wrap">
                <div className="flex h-20 py-6 justify-center">
                    <span className="font-semibold leading-4 items-center text-2xl text-lime-600">
                        [A]
                    </span>
                </div>
                <div className="flex flex-col items-center hover:text-indigo-200">
                        <ul className="px-2 py-2">
                            <li>
                                <Link href="/">
                                    <span><ComputerDesktopIcon className="h-6 w-6" /></span>
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
        </>
    )
}
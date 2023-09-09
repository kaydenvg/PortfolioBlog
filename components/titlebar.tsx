import Link from 'next/link'
import {ChevronLeftIcon} from '@heroicons/react/24/solid'

type props = {
    title : string
}

export function TitleBar(props:props){
    return(
        <div className="bg-white w-fit h-30 p-10 pl-5 flex items-center gap-5">
            <Link href="/">
                <ChevronLeftIcon className="h-10 pt-1 fill-zinc-400 hover:fill-zinc-500"/>
            </Link>
            <div className="text-4xl lg:text-5xl font-bold tracking-tight text-blue-500 drop-shadow-md">
                <h1 className="">{props.title}</h1>
            </div>
            <div>
                {/* Blog nav links: tags, most recent, etc */}
            </div>
      </div>
    )
}
import Link from 'next/link';
import { TitleBar } from '../../components/titlebar';

export default function Blog(){
    return(
      <div>
        <TitleBar title='Blog'/>
            <div className="bg-gray-100 flex flex-col items-center pt-20 h-screen">
                <div className="bg-white p-5 flex flex-col shadow-lg items-center justify-center rounded-lg">
                <img className="shadow-md object-contain h-64" src="https://i.pinimg.com/originals/5a/8c/6b/5a8c6b99a50dc742c8581716cae57c62.jpg" alt="construction cat"/>
                <h1 className="font-medium text-3xl mt-5">Under construction! Come back later :)</h1>
                </div>
            </div>
      </div> 
    );
}
import Link from 'next/link';
import { TitleBar } from '../../components/titlebar';
import { getPostsMetaData } from '../../lib/getPostsData.js';

export async function getStaticProps() {
  const postsData = getPostsMetaData();
  return {
    props: {
      postsData: postsData,
    }
  }
}

export default function Blog(){
    return(
      <div>
        <TitleBar title='Blog'/>
            <div className="bg-gray-100 flex flex-col pt-20 h-screen">
            {getPostsMetaData().map((metadata) => {
              return (
                <div key = {metadata.id}>
                  <h2 className = 'post-title'>{metadata.title}</h2>
                  <p className = 'post-description'>{metadata.description}</p>
                </div>
                )
            })}
                <div className="bg-white p-5 shadow-lg rounded-lg">
                  
                </div>
            </div>
      </div> 
    );
}


import Link from 'next/link';
import { TitleBar } from '../../components/titlebar';
import fs from "fs"
import path from "path"
import matter from 'gray-matter';
import { PostPreview } from "../../types/posts"
import PostCard from "../../components/postcard"
import { serialize } from "next-mdx-remote/serialize"
import { InferGetStaticPropsType } from "next"



export default function Blog({ postPreviews }: InferGetStaticPropsType<typeof getStaticProps>){
    return(
      <div>
        <TitleBar title='Blog' link='/'/>
            <div className="bg-gray-100 flex flex-col pt-20 h-screen">
            {postPreviews.map((postPreview, i) => {
              return (
                <div key={i}>
                  <PostCard postPreview={postPreview} />
                </div>
              )
            })}
            </div>
      </div> 
    );
}

export async function getStaticProps() {
  // get all MDX files
  const postFilePaths = fs.readdirSync("pages/blog/posts").filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === ".mdx"
  })

  const postPreviews: PostPreview[] = []

  // read the frontmatter for each file
  for (const postFilePath of postFilePaths) {
    const postFile = fs.readFileSync(`pages/blog/posts/${postFilePath}`, "utf8")

    const {content, data} = matter(postFile)
    console.log(data)

    postPreviews.push({
      ...data,
      // add the slug to the frontmatter info
      slug: postFilePath.replace(".mdx", "")
    } as PostPreview)
  }

  return {
    props: {
      postPreviews: postPreviews,
    },
    // enable ISR
    revalidate: 60,
  }
}
import Link from "next/link"
import { PostPreview } from "../types/posts"
import Image from "next/image"

export default function PostCard({ postPreview }: { postPreview: PostPreview }) {
  return (
    <div>
      <Link href={"blog/posts/" + postPreview.slug}>
        <div>
          <Image alt={postPreview.title} src={postPreview.image} width="300" height="100"/>
          <h2>{postPreview.title}</h2>
          <p>{postPreview.description}</p>
        </div>
      </Link>
    </div>
  )
}
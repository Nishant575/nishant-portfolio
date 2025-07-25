import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className="text-3xl font-bold mb-8 text-center">Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
  )
}

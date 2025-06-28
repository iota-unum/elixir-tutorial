import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center">{postData.title}</h1>
      <div className="prose lg:prose-xl dark:prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  );
}

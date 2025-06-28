import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts;
}

interface PageProps {
  params: {
    slug: string;
  } & Promise<any>; // This is a workaround for a potential Next.js type inference issue
  searchParams?: { [key: string]: string | string[] | undefined } & Promise<any>;
}

export default async function Post({ params }: PageProps) {
  const postData = await getPostData(params.slug);
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center">{postData.title}</h1>
      <div className="prose lg:prose-xl dark:prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  );
}

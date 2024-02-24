// "use client";

import Heading from "../../components/Heading";
import Head from "next/head";
import { getAllPosts } from "../../api/service";
import Link from "next/link";

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <Heading className="py-5 font-bold text-3xl" text="Posts" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ul>
          {posts.length > 0 ? (
            posts.map(({ id, title, body }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <Heading
                    tag="h2"
                    text={title}
                    className="text-xl font-bold mb-6 text-blue-500 hover:underline cursor-pointer"
                  />

                  <article className="text-gray-700 ">{body}</article>
                </Link>
              </li>
            ))
          ) : (
            <Heading className="p-5 font-bold text-3xl" text="Posts is Empty" />
          )}
        </ul>
      </div>
    </>
  );
};

export default Posts;

// tsrafce

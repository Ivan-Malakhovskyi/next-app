import Head from "next/head";
import PostInfo from "../../../components/PostInfo";
import { getPostById } from "../../../api/service";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

const Posts = async ({ params }) => {
  const post = await getPostById(params);

  return (
    <>
      <Head>
        <title>Post page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Posts;

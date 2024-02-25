import Head from "next/head";
import PostInfo from "../../../components/PostInfo";
import { getPostById } from "../../../api/service";
import { FC } from "react";
import { postType } from "../../../../types";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

interface postTypeProps {
  params: postType;
}

const Post: FC<postTypeProps> = async ({ params }) => {
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

export default Post;

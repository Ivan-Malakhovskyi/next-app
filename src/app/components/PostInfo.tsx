import { FC } from "react";
import { postType } from "../../types";

import Heading from "./Heading";
import Head from "next/head";
interface postInfoProps {
  post: postType;
}

const PostInfo: FC<postInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />;
  }

  return (
    <>
      <Head>
        <title>Post info page</title>
      </Head>

      <Heading className="py-5 font-bold text-3xl" text="Post Details" />

      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;

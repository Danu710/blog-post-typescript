import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { getPostsById } from "../api/post/post";

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Page({ postId }: { postId: Post }) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getPostsById(postId.id);
      setBlog(data);
    };

    fetchBlog();
  }, [postId]);

  console.log("Blog", blog);

  return (
    <>
      <div>
        <h1>ini nomor</h1>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const postId = params?.id;

  // Fetch data based on the postId
  // Replace this with your actual data fetching logic
  const postData: Post = {
    id: postId as unknown as number,
    title: `Post ${postId}`,
    content: `Content for Post ${postId}`,
  };

  return {
    props: {
      postId: postData,
    },
  };
};

import React, { useState, useEffect } from "react";
import { fetchComment } from "@/pages/api/comment/comment";

const CommentsBlog = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await fetchComment();
      setComments(data);
    };
    fetchComments();
  }, []);

  console.log("Comments", comments);

  return <div>CommentsBlog</div>;
};

export default CommentsBlog;

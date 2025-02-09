import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Post {
  title: string;
  body: string;
  id: string; // Ensure this matches the API response
}

function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const [Post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = async () => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (response.ok === false) {
      setError("An error occurred");
    } else {
      const data = await response.json();
      setPost(data);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (error !== null) {
    return <h1 className="text-danger">{error}</h1>;
  }

  if (Post === null) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{Post.title}</h2>
      <p>{Post.body}</p>
      <p>
        <b>👤 User ID:</b> {Post.id}
      </p>
      <Link to="/" className="btn btn-primary">
        ← Back to Posts
      </Link>
    </div>
  );
}

export default PostDetails;
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Posts {
  title: string;
  body: string;
  id: string; // Ensure this matches the API response
}

function PostsDetailsSearch() {
  const { id } = useParams<{ id: string }>();
  const [Posts, setPosts] = useState<Posts | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    const response = await fetch(`https://dummyjson.com/Posts/${id}`);
    if (response.ok === false) {
      setError("An error occurred");
    } else {
      const data = await response.json();
      setPosts(data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  if (error !== null) {
    return <h1 className="text-danger">{error}</h1>;
  }

  if (Posts === null) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{Posts.title}</h2>
      <p>{Posts.body}</p>
      <p>
        <b>👤 User ID:</b> {Posts.id}
      </p>
      <Link to="/" className="btn btn-primary">
        ← Back to Postss
      </Link>
    </div>
  );
}

export default PostsDetailsSearch;
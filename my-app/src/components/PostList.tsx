import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Posts {
    id: string;
    title: string;
}

function PostList() {    
    const [Posts,setPosts] = useState<Posts[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = async () => {
        const response = await fetch("https://dummyjson.com/posts");
        if (response.ok == false) {
            setError("An error occurred");
        }
        else {
          const data = await response.json();
        setPosts(data.posts);  
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    if (error !== null) {
        return <h1 className="text-danger">{error}</h1>;
    }


    return (
        <div className="container">
            <h1 className="text-center">Post List</h1>
        <div className="row row-cols-4 row-cols-md-2 g-4">
      {Posts.map((posts,) => (
        <div key={posts.id}>
          <h5 className="card-title">{posts.title}</h5>
          
          <Link to={`/posts/${posts.id}`} > View Post </Link>
        </div>
        
        ))}
        </div>
        </div>
    );

}
 export default PostList;
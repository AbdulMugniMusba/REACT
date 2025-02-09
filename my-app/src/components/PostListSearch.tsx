import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Posts {
    id: string;
    title: string;
}

function PostListSearch() {    
    const [Posts,setPosts] = useState<Posts[]>([]);
    const [error, setError] = useState<string | null>(null);
    const[ searchTerm, setSearchTerm] = useState<string>('');

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

 const filteredPost= Posts.filter((post)=>post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div className="container">
            <h1 className="text-center">Post List Search</h1>
            <input type="text" 
            name="Search " 
            id="Search"
            value={searchTerm}
            placeholder="Search for posts"
            className="form-control-mb-4"
            onChange={(e)=> setSearchTerm(e.target.value)}/>
             


        <div className="row row-cols-4 row-cols-md-2 g-4">
      {filteredPost.map((posts,) => (
        <div key={posts.id}>
          <h5 className="card-title">{posts.title}</h5>
          
          <Link to={`/posts/${posts.id}`} > View Post </Link>
        </div>
        
        ))}
        </div>
        </div>
    );

}
 export default PostListSearch
;
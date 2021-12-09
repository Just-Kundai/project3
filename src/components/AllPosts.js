import { Link } from 'react-router-dom';
import useFetch from '../useFetch';
import '../components/AllPosts.css';

const AllPosts = ({posts, title, img}) => {


    return (
        <div className="all-posts">
            <h2>{title}</h2>
            {posts.map(post => (
                <div className="blog-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>Written by {post.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default AllPosts;

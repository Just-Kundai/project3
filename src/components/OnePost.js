import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../useFetch';
import '../components/OnePost.css';
import Footer from '../components/Footer';

const OnePost = ({title}) => {
    const { id } = useParams();
    const { data: post, error, isPending } =  useFetch('http://localhost:8000/posts/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/posts/'+ post.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="one-post">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{post.title}</h2>
                <p>Written by {post.author}</p>
                <div>{post.body}</div>

            </article>

          
        </div>
     );
}

export default OnePost;

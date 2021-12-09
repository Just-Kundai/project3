import React from "react";
import "./Blog.css";
import Title from "../../components/Title";
import Navbar from '../../components/Navbar';
import AllPosts from '../../components/AllPosts';
import Footer from '../../components/Footer';
import useFetch from '../../useFetch';


const Blog = () => {
    const {data: posts, isPending, error} = useFetch('http://localhost:8000/posts');

    return (
        <div className="container">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <AllPosts posts={posts} title="All"/>
        <div>
          <Footer />
        </div>
        </div>
     );
}

export default Blog;

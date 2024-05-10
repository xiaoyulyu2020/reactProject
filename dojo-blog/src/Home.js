import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "bulabula ....", author: "Chris", id: 1},
        { title: "New Party!", body: "bulabula ....", author: "John", id: 2},
        { title: "New user!", body: "bulabula ....", author: "Chris", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect")
    }, [])

    return (  
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete }/>
        </div>
    );
}

export default Home;
import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "Blog 1 Title", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", author: "Domeshow" },
        { id: 2, title: "Blog 2 Title", body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", author: "Jonathan" },
    ]);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);console.log(newBlogs)
        setBlogs(newBlogs);
    }
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=> blog.author === "Domeshow")} title="Domeshow's blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);console.log(newBlogs)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res=> {
            return res.json()
        }).then(data => {
            setBlogs(data)
        })
    }, []);
    return (
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/> }
            { blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === "Domeshow")} title="Domeshow's blogs" handleDelete={handleDelete}/> }
        </div>
    );
}
 
export default Home;
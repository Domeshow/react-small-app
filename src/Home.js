import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);console.log(newBlogs)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(()=> {
            fetch("http://localhost:8000/blogs")
            .then(res=> {
                setBlogs(null);
                if (!res.ok)
                    throw Error("Could not fetch the data")
                return res.json(); //Else
            }).then(data => {
                setBlogs(data)
                setIsPending(false);
                setError(null);
            }).catch(err => {
                console.log(err.message)
                setError(err.message)
                setIsPending(false);
            })
        }, 1000);
    }, []);
    return (
        <div className="home">
            { isPending && <div>Loading...</div> }
            { error && <div> {error} </div> }
            { blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/> }
            { blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === "Domeshow")} title="Domeshow's blogs" handleDelete={handleDelete}/> }
        </div>
    );
}
 
export default Home;
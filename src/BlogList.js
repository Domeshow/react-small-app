const BlogList = ({blogs, title, handleDelete}) => {
    
    return ( 
        <div className="blog-list">
            <h3>{title} ({blogs.length})</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
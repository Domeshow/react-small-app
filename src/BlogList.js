const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h3>{title}</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <button>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
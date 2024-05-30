import { blogs } from "../../Data/blog";
import BlogListItem from "../BlogListItem/BlogListItem";

function BlogList(){
    return(
        <div>
            <h1>Blog List</h1>
            <BlogListItem data={blogs[0]}/>
        </div>
    )
}

export default BlogList;
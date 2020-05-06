import React, {Fragment ,useState, useEffect} from "react"
import CardBlogPost from "./CardBlogPost.jsx"
import "../assets/scss/BlogPost.scss"

const BlogPost = (props) => {
    const [title,setTitle] = useState(props.posts.title);
    const [body,setBody] = useState(props.posts.body);
    useEffect(()=>{
        setTitle(props.posts.title);
        setBody(props.posts.body)
    });
    return(
        <Fragment>
            <CardBlogPost key={props.posts.id}>
                <div className="row">
                    <div className="col-md-4">
                        <img className="blog-post-img" src="https://placeimg.com/640/480/tech" alt="pict"/>
                    </div>
                    <div className="col-md-8">
                        <h5 className="card-title">{props.posts.title}</h5>
                        <p className="card-text">{props.posts.body}</p>
                        <div className="blog-post__btn">
                            <a href="#" className="btn blog-post__btn-remove" onClick={() => props.remove(props.posts.id)}>Remove</a>
                            <a href="#" className="btn blog-post__btn-edit" onClick={() => props.edit({title,body})}>Edit</a>
                        </div>
                    </div>
                </div>
            </CardBlogPost>
        </Fragment>
    )

}
export default BlogPost
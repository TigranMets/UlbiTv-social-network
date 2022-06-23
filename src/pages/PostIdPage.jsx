import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [Comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById([params.id]);
        setPost(response.data);
    });

    const [fetchComments, isCommentLoading, commentError] = useFetching(async () => {
        const response = await PostService.getCommentByPostId([params.id]);
        setComments(response.data);
    });


    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div>
            <h1>You are in the post page with id {params.id}.</h1>
            {
                isLoading
                    ? <Loader />
                    : <div>{post.id}. {post.title}</div>
            }

            {
                isCommentLoading
                    ? <Loader />
                    : <div>
                        {Comments.map(comm => <div key={comm.id}>
                            <h5>{comm.name}</h5>
                            <span>{comm.body}</span>
                        </div>)
                        }
                    </div>
            }
        </div>
    )
}

export default PostIdPage;
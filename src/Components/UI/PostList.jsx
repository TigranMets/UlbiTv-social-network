import React from 'react';
import PostItem from './PostItem';
import '../../styles/App.css';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

const PostList = ({ posts, remove, title }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>Posts are not defined</h1>
        )
    }

    debugger;

    return (
        <div className='PostList'>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'>
                        <PostItem number={index + 1} remove={remove} post={post} key={post.id} />
                    </CSSTransition>)}
            </TransitionGroup>
        </div>
    );
}

export default PostList;

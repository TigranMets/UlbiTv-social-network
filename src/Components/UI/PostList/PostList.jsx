import React from 'react';
import PostItem from '../PostItem/PostItem';
import styles from './PostList.module.css';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

const PostList = ({ posts, remove, title }) => {

    if (!posts.length) {
        return (
            <h1 className={styles.postsAreNotDefined}>Posts are not defined</h1>
        )
    }

    return (
        <div className={styles.postList}>
            <h1 className={styles.postsTitle}>{title}</h1>
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

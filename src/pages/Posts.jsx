import React, { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import MyButton from '../Components/UI/MyButton/MyButton';
import MyModal from '../Components/UI/MyModal/MyModal';
import Pagination from '../Components/UI/Pagination/Pagination';
import PostFilter from '../Components/UI/PostFilter';
import PostForm from '../Components/UI/PostForm';
import PostList from '../Components/UI/PostList/PostList';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  console.log(lastElement);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, isPostsLoading, page < totalPages, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  let createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className='posts'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <h1>Some error occurred ${postError}</h1>
      }
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Posts about jS' />
      {isPostsLoading &&
        <Loader />
      }
      <div ref={lastElement} style={{ height: 100, backgroundColor: 'red' }}></div>
    </div>
  );
}

export default Posts;

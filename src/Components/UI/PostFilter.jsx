import React from 'react';
import Input from './Input/Input';
import MySelect from './MySelect/MySelect';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div className="App">
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sort by'
                options={[
                    { value: 'title', name: 'by name' },
                    { value: 'body', name: 'by description' }
                ]} />
        </div>
    );
}

export default PostFilter;

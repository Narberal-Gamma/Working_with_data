import React from "react";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                type='text'
                placeholder='Поиск'
            />
            <Select
                value={filter.sort}
                onChange={sortType => setFilter({...filter, sort: sortType})}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По название' },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </div>
    )
}

export default PostFilter
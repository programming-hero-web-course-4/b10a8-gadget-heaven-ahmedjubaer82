import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Categories = ({ categories }) => {
    const { category } = useParams(); 

    return (
        <div className='gap-2 rounded-lg flex-col p-6 flex border-2 w-60 items-center h-min '>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `btn ${!category ? 'bg-purple-500 text-white' : ''}`
                }
            >
                <button className="w-28 rounded-3xl">All Products</button>
            </NavLink>
            {categories.map(category => (
                <NavLink
                    to={`/category/${category.category}`}
                    key={category.id}
                    className={({ isActive }) =>
                        `btn ${isActive ? 'bg-purple-500 text-white' : ''}`
                    }
                >
                    <button className="w-28">{category.category}</button>
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;

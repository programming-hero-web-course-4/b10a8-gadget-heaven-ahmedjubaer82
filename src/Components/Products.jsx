import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const { category } = useParams();
    const data = useLoaderData();
    const [products, setProducts] = useState(data);

    useEffect(() => {
        if (category) {
            console.log(`Filtering for category: ${category}`);
            const filterByCategory = data.filter(product => product.category === category);
            setProducts(filterByCategory);
        } else {
            console.log("Displaying all products");
            setProducts(data);
        }
    }, [category, data]);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {products.length > 0 ? (
                    products.map(product => (
                        <Product key={product.product_id} product={product} />
                    ))
                ) : (
                    <p className='text-[32px] font-semibold text-center items-center justify-center'>No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Products;

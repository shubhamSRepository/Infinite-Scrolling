import { useEffect, useState } from 'react';

function Data() {

    const [items, setItems] = useState([]);

    const getData = async () => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=1`);

        const data = await res.json();
        setItems(data);
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h2>Infinite Scrolling</h2>

            <div className='container'>



                {
                    items.map((item) => (
                        <div className='box' key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Data

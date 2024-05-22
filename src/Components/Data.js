import { useEffect, useState } from 'react';


function Data() {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);


    const getData = async () => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);

        const data = await res.json();
        setItems((prev) => [...prev, ...data]);
        console.log(data);
    }




    useEffect(() => {
        getData();
    }, [page]);



    const handleInfiniteScroll = async () => {

        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {

        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);

    }, []);



    return (
        <>
            <h2>Infinite Scrolling</h2>

            <div className='container'>

                {
                    items.map((item, index) => (
                        <div className='box' key={index}>
                            <p>{item.id}</p>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Data;

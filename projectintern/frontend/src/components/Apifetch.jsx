import React, { useEffect } from "react";
import axios from 'axios';

const ApiFetch = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        const handleApi = () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    console.log(res.data);
                    setData(res.data);
                })
                .catch(err => console.log(err));
        };

        handleApi();
    }, []);

    return (
        <div className="grid grid-cols-4 border-black place-items-center">
            {data.map((value, index) => (
                <div key={index} className="p-8 flex-cols bg-slate-500 text-black">
                    <span className="text-2xl">Id: {value.id}</span>
                    <h1 className="text-4xl">Title: {value.title}</h1>
                    <p className="text-xl">Body: {value.body}</p>
                </div>
            ))}
        </div>
    );
}

export default ApiFetch;

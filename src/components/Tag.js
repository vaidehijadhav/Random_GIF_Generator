import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from  './Spinner';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random =()=>{

    const [tag, setTag] = useState("");
    const [gif, setGif] = useState("");
    const [loading , setLoading] = useState(false);
    
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url);        //destructuring  assignment to extract data property from response object 
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource); 
        setLoading(false);
    }

    useEffect (()=>{
        fetchData();
    },[])

    function clickHandler (){
        fetchData();
    }

    function changeHandler (event){
        setTag(event.target.value);
    }

    return (
        <div className='bg-blue-500 w-1/2 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] text-2xl underline font-bold'>Random Gif</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width="450"/>)
            }

            <input
            onChange={changeHandler}
            className='w-10/12 text-lg py-2 rounded-lg text-center'
            value={tag}/>
            
            <button onClick={clickHandler}
            className='w-10/12 bg-green-300 text-lg py-2 rounded-lg mb-[20px]'>
                Generate
            </button>
            
        </div>
    );
}

export default Random;
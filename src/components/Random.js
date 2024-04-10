import React from 'react';
import Spinner from  './Spinner';
import useGif from '../hooks/UseGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random =()=>{

    // const [gif, setGif] = useState("");
    // const [loading , setLoading] = useState(false);
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);        //destructuring  assignment to extract data property from response object 
    //     const imageSource = data.data.images.downsized_large.url;
    //     // console.log(imageSource);
    //     setGif(imageSource); 
    //     setLoading(false);
    // }

    // useEffect (()=>{
    //     fetchData();
    // },[])

    const {gif, loading, fetchData} = useGif();

    function clickHandler (){
        fetchData();
    }

    return (
        <div className='bg-green-500 w-1/2 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] text-2xl underline font-bold'>A Random Gif</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width="450"/>)
            }
            
            <button onClick={clickHandler}
            className='w-10/12 bg-green-300 text-lg py-2 rounded-lg mb-[20px]'>
                Generate
            </button>
            
        </div>
    );
}

export default Random;
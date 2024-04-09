import React, {useState} from 'react';

const Random =()=>{

    const [gif, setGif] = useState("");


    function clickHandler (){

    }

    return (
        <div className='bg-green-500 h-[450px] w-1/2 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='text-2xl underline font-bold'>A Random Gif</h1>
            <img src={gif} width="450"/>
            <button onClick={clickHandler}
            className='w-10/12 bg-green-300 text-lg py-2 rounded-lg'>
                Generate
            </button>
            
        </div>
    );
}

export default Random;
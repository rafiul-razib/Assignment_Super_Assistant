import React, { useState } from 'react';

const CategorizePage = () => {

    const [inputs, setInputs] = useState([""])

    const handleAddInput = (index) => {
        const newInput = [...inputs];
        newInput.splice(index + 1, 0, "");
        setInputs(newInput)
    }

    const handleInputChange = (index, value) =>{
        const newInput = [...inputs];
        newInput[index] = value;
        setInputs(newInput)
    }

    return (
        <div className='max-w-6xl mx-auto text-center'>
            <h1 className='text-2xl'>Categorize the following</h1>

            <div className='text-start mt-10'>
                <h3 className='text-xl my-6'>Categories</h3>
                {/* <div className='flex flex-col'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                </div> */}

                <div>
                    {
                        inputs.map((input, index)=> (
                            <div key={index} className='flex align-middle mb-4'>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                                <button onClick={()=> handleAddInput(index)} className='p-2'>+</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CategorizePage;
import React from 'react';

const Info = () => {
    return(
        <div className="bg-black h-screen flex justify-center items-center">
            <div className="grid grid-cols-3 gap-6">
                <div class="bg-white h-60 w-96 col-span-2 border-r-8 border-b-8 border-blue-300">
                    <p className="text-black text-2xl text-center">1</p>
                </div>
                <div className="p-9 text-m text-white">
                    Info
                </div>
                <div class="bg-white h-60 w-96 col-span-2 border-r-8 border-b-8 border-blue-300">
                    <p className="text-black text-2xl text-center">2</p>
                </div>
                <div className="p-9 text-white">
                    Info
                </div>
                <div class="bg-white h-60 w-96 col-span-2 border-r-8 border-b-8 border-blue-300">
                    <p className="text-black text-2xl text-center">3</p>
                </div>
                <div className="p-9 text-white">
                    Info
                </div>
            </div>
        </div>
    );
}

export default Info;
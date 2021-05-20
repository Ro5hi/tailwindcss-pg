import React from 'react';

const Info = () => {
    return(
        <div className="bg-black h-screen w-screen flex justify-center items-center">
            <div className="grid grid-cols-3 gap-6">
                <div class="bg-white h-60 w-96 place-items-center mx-8 border-r-8 border-b-8 border-blue-300">
                    <img class="object-contain h-40" src="/1.jpg" alt="1"></img>
                    <div className="p-2 mx-8 text-m text-black">
                        Driven by our mission to contribute to a better Earth.
                    </div>
                </div>
                <div class="bg-white h-60 w-96 place-items-center mx-8 border-r-8 border-b-8 border-blue-300">
                    <img class="object-contain h-40" src="/2.jpg" alt="2"></img>
                    <div className="p-2 mx-8 text-m text-black">
                        Repurposing old hardware into functional products.
                    </div>
                </div>
                <div class="bg-white h-60 w-96 place-items-center mx-8 border-r-8 border-b-8 border-blue-300">
                    <img class="object-contain h-40" src="/3.jpg" alt="3"></img>
                    <div className="p-2 mx-8 text-m text-black">
                        Using technology as a solution for efficiency and control.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
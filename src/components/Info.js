import React from 'react';

const Info = () => {
    return(
        <div className="flex flex-wrap justify-center bg-black h-screen w-screen text-center">
            <div className="grid grid-cols-3 gap-6 place-items-center">
                <div class="bg-white h-72 w-96 mx-8 border-r-8 border-b-8 border-blue-300">
                    <img class="h-40 mx-auto" src="/1.jpg" alt="1"></img>
                    <div className="text-center p-2 mx-8 text-m text-black">
                        Driven by our mission to contribute to a better Earth.
                    </div>
                </div>
                <div class="bg-white h-72 w-96 mx-8 border-r-8 border-b-8 border-blue-300">
                    <img class="h-40 mx-auto" src="/2.jpg" alt="2"></img>
                    <div className="p-2 mx-8 text-m text-black">
                        Repurposing old hardware into functional products.
                    </div>
                </div>
                <div class="bg-white h-72 w-96 mx-8 border-r-8 border-b-8 border-blue-300">
                    <img class="h-40 mx-auto" src="/3.jpg" alt="3"></img>
                    <div className="p-2 mx-8 text-m text-black">
                        Using technology as a solution for efficiency and control.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
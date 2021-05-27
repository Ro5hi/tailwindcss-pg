import React from 'react';

const Info = () => {
    return(
        <div className="flex flex-wrap justify-center place-items-center bg-black w-screen h-screen text-center" id="info">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                <div class="bg-white space-y-8 h-72 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                    <img class="h-40 mx-auto" src="/1.jpg" alt="1"></img>
                    <div className="select-none text-center p-2 mx-8 text-m text-black">
                        Driven by our mission to contribute to a better Earth.
                    </div>
                </div>
                <div class="bg-white space-y-8 h-72 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                    <img class="h-40 mx-auto" src="/2.jpg" alt="2"></img>
                    <div className="select-none text-center p-2 mx-8 text-m text-black">
                        Repurposing old hardware into functional products.
                    </div>
                </div>
                <div class="bg-white space-y-8 h-72 w-72 mx-8 border-r-8 border-b-8 border-blue-300 transition duration-500 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110">
                    <img class="h-40 mx-auto" src="/3.jpg" alt="3"></img>
                    <div className="select-none text-center p-2 mx-8 text-m text-black">
                        Using technology as a solution for efficiency and control.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
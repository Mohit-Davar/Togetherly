import React from 'react'

function About() {
    return (
        <section className='flex flex-col lg:flex-row'>
            {/* Left Section */}
            <article className='bg-red-500 lg:w-1/2 w-full min-h-screen flex p-5 gap-4'>
                <div className="image-text flex flex-col w-1/2 h-full gap-4 pt-16">
                    <div className="bg-green-500 rounded-3xl flex-1"></div>
                    <div className="bg-green-500 rounded-3xl h-1/4"></div>
                </div>
                <div className="images flex flex-col w-1/2 h-full gap-4 pb-16">
                    <div className="bg-green-500 rounded-3xl flex-1"></div>
                    <div className="bg-green-500 rounded-3xl flex-1"></div>
                </div>
            </article>

            {/* Right Section */}
            <article className='bg-blue-500 lg:w-1/2 w-full min-h-screen'>
                <h2>About Us</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, minus.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat culpa inventore omnis iusto, animi voluptas?</p>
                <button>
                    Learn More -&gt;
                </button>
                <video src=""></video>
            </article>
        </section>
    )
}

export default About

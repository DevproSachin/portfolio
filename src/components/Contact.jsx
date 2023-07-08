import React from 'react'
import { useState } from 'react';
function Contact() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <div>
            <div className=' bg-blue-600 px-44'>
                <div className="rw">
                    <h2 className="text-3xl font-bold mb-4">Get In touch</h2>
                    <form action="submit.php" method="POST" className="">
                        <div className="mb-4 ">
                            <label for="firstName" className="text-sm font-medium">First Name:</label>
                            <input type="text" id="firstName" name="firstName" required className=" w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        
                        </div>

                        <div className="mb-4 ">
                            <label for="lastName" className="text-sm font-medium">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" required className=" w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div className="mb-4">
                            <label for="services" className="text-sm font-medium">Services:</label>
                            <select id="services" name="services" className="w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="Web Design">Web Design</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="SEO">SEO</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label for="message" className="text-sm font-medium">Message:</label>
                            <textarea id="message" name="message" rows="5" className="w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                        </div>

                        <div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Submit</button>
                        </div>
                    </form>
                </div>
                {/* <div clasName="rw">
                    <h2>Get In Touch</h2>
                    <hr className="w-20 h-2  my-1 bg-red-600" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet?
                        Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                </div> */}
            </div>
        </div>
    )
}

export default Contact

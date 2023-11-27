import React from 'react';
import Webcam from "react-webcam";
import image1 from "../assests/Illustrator.png"
import {Link, useParams} from "react-router-dom"

const Verification = () => {
  const{id} = useParams()
  return (
    <div className="container-fluid tw-bg-[white]">
        <div className="row">
            <div className="col-md-6 tw-p-4 tw-flex tw-justify-center tw-items-center tw-flex-col">
               <div className=' tw-w-full tw-flex tw-justify-start '> <h1>Good, Luck!!</h1></div>
                 <img src={image1} alt="" className=' tw-w-2/3 tw-h-2/3' />

                <div className=' sm:tw-w-1/2 tw-w-1/2 tw-flex tw-justify-center tw-items-center tw-gap-5 tw-flex-col tw-p-4 tw-rounded-md tw-shadow-xl sm:tw-ml-10 sm:tw-mt-[-180] border border-success tw-mt-[-50] tw-ml-10'
                  >
                    <input type="text" name="" id="" className=' tw-w-full tw-p-2 tw-rounded-md' placeholder='Enter your Name' />
                  
                    <input type="text" className='tw-w-full tw-p-2 tw-rounded-md' placeholder='Enter your email' />
                    
                    <input type="text" className=' tw-w-full tw-p-2 tw-rounded-md' placeholder='Enter your rollno/unique id'  />
                    <input type="tel" className=' tw-w-full tw-p-2 tw-rounded-md' placeholder='Enter your Mobile phone' />
                <button className=' tw-p-2 tw-w-full tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md tw-text-lg'> Submit</button>
                </div>
            </div>
            <div className="col-md-6 tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-3">
            <div className=' tw-w-full tw-p-2 tw-shadow-md tw-rounded-md border border-success'>
               <p className=' tw-text-lg'> 1) Position your face within the camera frame</p>
                 <p className=' tw-text-lg'>2) If the picture is blurry ,Retake picture</p>
                 <p className='tw-text-lg'>3) Sit in clear and Noiseless Background</p>
                </div>
            
                <div className=' border border-success tw-mt-[100] tw-rounded-md sm:tw-w-[401] tw-w-96 tw-shadow-md border border-success'>
                <Webcam height={400} width={400} className='tw-object-cover' />
               
                
                </div>
                <button className=' tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md'>Take a Snapshot</button>
                <br />
                <Link to = {`/testenv/${id}`}>Star test here</Link>
             
                
              
            </div>
        </div>
    </div>
  )
}

export default Verification;
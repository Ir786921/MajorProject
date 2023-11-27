import React from 'react'
import logo from '../assests/logo.png';
import back1 from '../assests/back1.avif'

const Home = () => {
  return (
 <div className="container-fluid m-0 p-0">
  <div className="row">
    <div className="col-12 tw-flex tw-justify-center border border-success" style={{backgroundImage:`url(${back1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className='m-5 p-3 tw-flex tw-justify-center tw-flex-col tw-items-center'>
        <img src={logo} alt="logo" className='tw-w-96 tw-h-64 tw-object-contain tw-bg-transparent' />
        <br />
        <h1 className='text-center tw-text-gray-200'>Powerful, Database-based Online Assessment Platform</h1>
        <br />
        <h6 className='text-center tw-text-xl tw-text-gray-300'> A one-stop platform for all your assessments needs <br />Hire best talent using Testify</h6>
        <br />
        <button className='btn btn-success tw-w-48'>Get Started</button>
      </div>
    </div>
  </div>
 </div>
  )
}

export default Home;
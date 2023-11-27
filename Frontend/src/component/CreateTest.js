import React, { useContext } from "react";
import React, { useState, } from "react";
import alltestContext from "../utils/Context";
import TestCard from "./TestCard";


const CreateTest = () => {
  const {setNewTitle,setNewDuration,setNewInst,ALLTEST, newTest,newTitle,newInst} = useContext(alltestContext);
 
 function clickHandle(){
     const obj = {
      name:newTitle,
      icon:"fa-solid fa-pen-to-square tw-text-white tw-text-4xl m-auto",
      desc:newInst,
      part:"Your Tests"

     }
     newTest.push(obj);
     ALLTEST.push(obj);
     setNewTitle(" ");
     setNewInst(" ");
 }
 


  return (
    <div className="container border border-success tw-p-2 tw-shadow-md tw-rounded-md">
    <h4 className="text-center mt-2 tw-text-emerald-600">Create your own customize test</h4>
    <br />
    <div className="m-auto  tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
                 <input type="text" className=" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md" placeholder="Enter the Title of Test"  onChange={(e)=>{
                  setNewTitle(e.target.value)
                 }} />
                 <input type="tel" className="tw-w-2/5 tw-p-2 tw-rounded-md" placeholder="Enter the duration of the test" onChange={(e)=>{
                  setNewDuration(e.target.value)
                 }} />
    </div>
    <br />
    <div className=" tw-flex tw-justify-center tw-rounded-md">
      <textarea name="" id="" cols="100" rows="5" className="m-auto tw-w-4/5 tw-text-lg tw-p-2 tw-rounded-md" placeholder="Enter the Instruction for the test in serial number.. "  
        onChange={(e)=>{
                  setNewInst(e.target.value)
                 }}></textarea>
    </div>
    <br />
    <div className=" tw-p-2 border border-success tw-flex tw-flex-col tw-justify-center tw-bg-gray-100 tw-shadow-xl tw-rounded-md">
     <textarea name="" id="" cols="100" rows="5" className="m-auto tw-w-4/5 tw-text-lg tw-p-2 tw-rounded-md" placeholder="Enter your Questions"></textarea>
     <br />
     <div className=" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
                 <input type="text" className=" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md" placeholder="Enter the option 1" />
                 <input type="tel" className="tw-w-2/5 tw-p-2 tw-rounded-md" placeholder="Enter the option 2" />
    </div>
    <div className="tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
                 <input type="text" className=" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md" placeholder="Enter the option 3" />
                 <input type="tel" className="tw-w-2/5 tw-p-2 tw-rounded-md" placeholder="Enter the option 4" />
    </div>
    <div className=" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
                 <input type="text" className=" tw-w-[81%] tw-p-2 tw-text-lg tw-rounded-md" placeholder="Enter the Answer here" />
                
    </div>
    <div className=" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
                <button className="tw-bg-green-600 tw-border-0 tw-p-2 tw-rounded-md tw-text-lg tw-text-white tw-shadow-md">Add Question</button>
                
    </div>
    </div>
    <div className="tw-p-4 tw-flex tw-flex-row tw-justify-center tw-mt-3 tw-gap-3">
            <button className="tw-bg-green-600 tw-border-0 tw-px-4 tw-py-2 tw-rounded-md tw-text-lg tw-text-white" onClick={clickHandle}>Create a Test</button>
                
    </div>
  
    </div>
  );
};

export default CreateTest;

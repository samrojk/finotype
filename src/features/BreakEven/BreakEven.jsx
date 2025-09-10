import React from 'react'
import Line from '../../assets/Line';
import BreakEvenForm from './BreakEvenForm';

const BreakEven = () => {
  return (
    <>
      <div className="mx-[42px] mt-[42px] flex flex-col justify-center items-center gap-[32px] ">
        <div className=" flex flex-col justify-center items-center gap-[20px] ">
          <div className=" flex flex-col justify-center items-center gap-[4px] self-stretch ">
            <h2 className="text-[#000] text-[62px] text-center font-medium leading-normal tracking-[2.56px]">BreakEven</h2>
            <p className="text-[#333] text-[24px] font-normal leading-normal tracking-[0.96px]">Find the point where your business turns profitable</p>
          </div>
          <Line />
        </div>
      </div>
      <BreakEvenForm />
    </>
  )
}

export default BreakEven

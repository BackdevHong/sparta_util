import React, { ChangeEvent, FC, useState } from 'react'

interface Props {
  idx: number;
}

const DetailTime : FC<Props> = ({idx}) => {

  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  return (
    <div className='w-[30rem] h-full mt-2 mx-auto md:container sm:container container'>
      <form>
          <label htmlFor="label" className='flex flex-row items-center justify-center p-2'>
            <div className='mr-3'> [ {idx} ] 번째 영상 원본 시간 : </div>
            <label htmlFor="number" className='flex flex-row items-center justify-center'>
              <input type="number" className='w-10 border text-center'/>
              <div className='ml-1'>시간 </div>
              <input type="number" className='w-10 border ml-2 text-center'/>
              <div className='ml-1'>분 </div>
              <input type="number" className='w-10 border ml-2 text-center'/>
              <div className='ml-1'>초 </div>
            </label>
          </label>
      </form>
    </div>
  )
}

export default DetailTime
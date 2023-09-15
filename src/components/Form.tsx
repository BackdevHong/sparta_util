import React, { ChangeEvent, useState } from 'react'
import JuchaIndex from './JuchaIndex';

const Form = () => {
  const [editJucha, setEditJucha] = useState(1)

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setEditJucha(value)
  }

  return (
    <div className='w-[30rem] h-full mt-20 border mx-auto md:container sm:container container'>
      <form>
          <label htmlFor="text" className='flex flex-row items-center justify-center p-5'>
            <div className='mr-3'>편집한 강의 주차 수 ( 1주차 : 1, 2주차 이상 : 2개 이상) : </div>
            <input type="number" className='border text-center' defaultValue={editJucha} onChange={handleChange}/>
          </label>
          {
            editJucha <= 0 ? (
              <div>
                편집한 주차가 없습니다.
              </div>
            ) : (
              Array.from(Array(editJucha), (x, i) => <JuchaIndex key={x} idx={i + 1}/>)
            )
          }
      </form>
    </div>
  )
}

export default Form
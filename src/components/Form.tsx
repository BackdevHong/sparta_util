import React, { ChangeEvent, FormEvent, useState } from 'react'
import JuchaIndex from './JuchaIndex';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Form = () => {
  const [editJucha, setEditJucha] = useState(1)
  const {allTime} = useSelector((state : RootState) => state.timeArray)

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 0) {
      alert("0 이하로는 선택할 수 없습니다.")
      e.target.value = "0";
      setEditJucha(0)
    }
    setEditJucha(value)
  }

  return (
    <div className='w-[30rem] h-full mt-20 border mx-auto md:container sm:container container'>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <label htmlFor="text" className='flex flex-row items-center justify-center p-5 mx-auto sm:container'>
            <div className='mr-3'>편집한 강의 주차 수 ( 1주차 : 1, 2주차 이상 : 2개 이상) : </div>
            <input type="number" className='border text-center' defaultValue={editJucha} onChange={handleChange}/>
          </label>
          {
            editJucha <= 0 ? (
              <div>
                편집한 주차가 없습니다.
              </div>
            ) : (
              Array.from(Array(editJucha), (x, i) => <JuchaIndex key={i} idx={i + 1}/>)
            )
          }

          <div className='mt-2'>
            총 합계 시간 : {allTime}<br />
            계산식 적용 : {Math.round(allTime / 10)}<br />
            계산 가격 : {Math.round(allTime / 10) * 9000}
          </div>
      </form>
      
    </div>
  )
}

export default Form
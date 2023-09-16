import React, { ChangeEvent, FC, useState } from 'react'
import DetailTime from './DetailTime';

interface Props {
  idx: number;
}
const JuchaIndex : FC<Props> = ({idx}) => {
  
  const [detailC, setDetailC] = useState(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 0) {
      alert("0 이하로는 설정할 수 없습니다.")
      e.target.value = "0"
      setDetailC(0)
    }
    setDetailC(value)
  }

  return (
    <div className='w-[30rem] h-full mt-2 mx-auto md:container sm:container container'>
      <form>
          <label htmlFor="text" className='flex flex-row items-center justify-center p-2'>
            <div className='mr-3'> [ {idx} ] 주차 내 순서 수 : </div>
            <input type="number" className='border text-center' onChange={handleChange} />
          </label>
      </form>
      {
        detailC <= 0 ? (
          <div>
            편집한 주차를 적어주십쇼.
          </div>
        ) : (
          <div>
            {Array.from(Array(detailC), (x, i) => <DetailTime key={x} idx={i+1} />)}
          </div>
        )
      }
    </div>
  )
}

export default JuchaIndex
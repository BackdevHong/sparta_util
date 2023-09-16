import React, { ChangeEvent, FC, useState } from 'react'

interface Props {
  idx: number;
}

const DetailTime : FC<Props> = ({idx}) => {

  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const handleChange = (e : ChangeEvent<HTMLInputElement>, type : string) => {
    switch (type) {
      case "hour":
        if (Number(e.target.value) < 0) {
          e.target.value = "0"
          setHour(0)
          alert("0 이하로는 설정할 수 없습니다.")
          break;
        }
        setHour(Number(e.target.value))
        break;
      case "minute":
        if (Number(e.target.value) < 0) {
          e.target.value = "0"
          setMinute(0)
          alert("0 이하로는 설정할 수 없습니다.")
          break;
        }
        if (Number(e.target.value) >= 60) {
          e.target.value = "59"
          setMinute(59)
          alert("59 이상으로는 설정할 수 없습니다.")
          break;
        }
        setMinute(Number(e.target.value))
        break;
      case "second":
        if (Number(e.target.value) < 0) {
          e.target.value = "0"
          setSecond(0)
          alert("0 이하로는 설정할 수 없습니다.")
          break;
        }
        if (Number(e.target.value) >= 60) {
          e.target.value = "59"
          setSecond(59)
          alert("59 이상으로는 설정할 수 없습니다.")
          break;
        }
        setSecond(Number(e.target.value))
        break;
      default:
        break;
    }

    console.log(hour, minute, second)
  }

  const handleCaluclate = (h : number, m : number, s : number) => {
    const hour = h * 3600;
    const minute = m * 60;
    const second = s;

    return hour + minute + second;
  }

  return (
    <div className='w-[30rem] h-full mt-2 mx-auto md:container sm:container container'>
      <form>
          <label htmlFor="label" className='flex flex-row items-center justify-center p-2'>
            <div className='mr-3'> [ {idx} ] 번째 영상 원본 시간 : </div>
            <label htmlFor="number" className='flex flex-row items-center justify-center'>
              <input type="number" className='w-10 border text-center' defaultValue={hour} onChange={(e) => handleChange(e, "hour")}/>
              <div className='ml-1'>시간 </div>
              <input type="number" className='w-10 border ml-2 text-center' defaultValue={minute} onChange={(e) => handleChange(e, "minute")}/>
              <div className='ml-1'>분 </div>
              <input type="number" className='w-10 border ml-2 text-center' defaultValue={second} onChange={(e) => handleChange(e, "second")}/>
              <div className='ml-1'>초 </div>
            </label>
            <div className='ml-2'>{handleCaluclate(hour, minute, second) > 0 ? (
              handleCaluclate(hour, minute, second)
            ) : (
              null
            )}</div>
          </label>
      </form>
    </div>
  )
}

export default DetailTime
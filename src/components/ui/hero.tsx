import {useContext} from 'react'
import { GlobalStateContext } from '@/contexts/global-state'

export default function Hero() {
    const {color} = useContext(GlobalStateContext)
  return (
    <div className='h-screen w-screen flex items-center text-center justify-center fixed z-10 '>
        <div className='flex flex-col'>
            <div className="text-gray-500 text-sm mb-2">HOME</div>
            <div>
                <h1 className='text-8xl font-medium'>
                    Hi, I'm <span style={{color}}>Sami</span>, a<br /> full stack developer</h1>
            </div>
        </div>
    </div>
  )
}

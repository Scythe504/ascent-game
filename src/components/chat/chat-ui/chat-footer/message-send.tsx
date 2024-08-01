import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


export const MessageSend = ()=> {

    return <div 
    className="h-[80px]  
    flex flex-row
     gap-2 p-2 items-center z-20
      bg-black w-full
     "
     >
        <div className="border rounded-full p-3"></div>
        <div className="border rounded-full text-center p-2">
            Share
        </div>
        <Input className='md:text-xl' placeholder='Type a message'/>
        <Button className='md:text-xl'>
            <span>Send</span>
        </Button>
    </div>
}
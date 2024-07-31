import { abaddon_bold, abaddon_light } from "@/app/utils/font"
import { ChatBorder } from "./message-border"


export const ChatBubble = ({
    message
}: {
    message: string
}) => {
    return <div>
        <p>
            User
        </p>
        <ChatBorder>


            <div className={`text-3xl ${abaddon_bold.className} 
            p-5 border-white 
            w-fit bg-slate-950/30`
            }>
                {message}
            </div>
        </ChatBorder>
    </div>
}
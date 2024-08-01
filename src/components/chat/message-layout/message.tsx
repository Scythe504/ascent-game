import { abaddon_bold, abaddon_light } from "@/utils/font"
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
            <p className={`text-2xl ${abaddon_bold.className} 
            p-5 border-white 
            w-fit bg-slate-950/30
            max-w-[650px]
            `
            }>
                {message}
            </p>
        </ChatBorder>
    </div>
}
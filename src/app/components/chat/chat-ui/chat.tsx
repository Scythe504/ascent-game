import { ChatBubble } from "../message-layout/message"

export const ChatUi = () => {
    const userMessage = [
        {
            message: "Hey there mate",
            self: true
        },
        {
            message: "Wassup",
            self: false
        }
    ]

    return <div className="flex flex-row w-full h-full px-8">
        <div className="w-1/4 space-y-8 text-2xl">
            <p>
                Ux
            </p>
            <p>
                Yu
            </p>
            <p>
                Mi
            </p>
            <p>
                Hi
            </p>
        </div>
        <div className='flex flex-col w-full h-full px-8'>
            {
                userMessage.map((msg) => (
                    <div className={msg.self ? 'ml-auto' : 'mr-auto'}>
                        <ChatBubble message={msg.message} />
                    </div>
                ))
            }
        </div>
    </div>
}
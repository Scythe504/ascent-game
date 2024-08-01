import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ChatBubble } from "../message-layout/message"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Contacts } from '@/components/friend-list/friends'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const ChatUi = () => {
    const userMessage = [
        { message: "Hey there mate", self: true },
        { message: "Wassup", self: false },
        { message: "Wassup", self: true },
        { message: "Me good", self: false },
        { message: "Wassup", self: true },
        { message: "Me good", self: false },
        { message: "Wassup", self: true },
        { message: "Me good", self: false },
        { message: "Wassup", self: true },
        { message: "Me good, and what about you Me good, and what about you Me good, and what about you ", self: false },
    ]

    return (
        <ResizablePanelGroup direction="horizontal" className="border h-[calc(100vh-4rem)]">
            <ResizablePanel minSize={20} defaultSize={20} className="hidden sm:block">
                <ScrollArea className="h-full">
                    <Contacts />
                </ScrollArea>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel className="flex flex-col relative">
                <ScrollArea className="flex-grow overflow-y-auto pb-20">
                    <div className="flex flex-col gap-2 p-4">
                        {userMessage.map((m, idx) => (
                            <div key={idx} className={m.self ? 'ml-auto' : 'mr-auto'}>
                                <ChatBubble message={m.message} />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <div className="absolute bottom-0 left-0 right-0 p-2 border-t bg-black">
                    <div className="flex items-center gap-2">
                        <div className="border rounded-full p-3"></div>
                        <div className="border rounded-full text-center p-2">
                            Share
                        </div>
                        <Input className='flex-grow md:text-xl' placeholder='Type a message' />
                        <Button className='md:text-xl'>
                            <span>Send</span>
                        </Button>
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
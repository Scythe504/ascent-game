import { ChatUi } from "../components/chat/chat-ui/chat";

export default function Home() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <p className="text-center text-8xl h-16">
        Ascent
      </p>
      <div className="flex-grow overflow-hidden">
        <ChatUi/>
      </div>
    </main>
  );
}
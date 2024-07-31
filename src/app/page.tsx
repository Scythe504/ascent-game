import { ChatUi } from "./components/chat/chat-ui/chat";

export default function Home() {
  return (
    <main className="p-8">
      <p className="text-center text-8xl">
        Ascent
      </p>
      <ChatUi/>
    </main>
  );
}

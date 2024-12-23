import ChatHeader from './components/ChatHeader';
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
import CustomerInfo from './components/CustomerInfo';
import Sidebar from './components/Sidebar';

function App() {
  const messages = [
    {
      content: "I keep getting 'error while creating a new pop up' for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart",
      timestamp: "12:52 PM",
      sender: "Oğuz Yağız Kara",
      avatar: "https://avatars.githubusercontent.com/u/144549805?v=4",
      isOutgoing: false
    },

    {
      content: "Hey, I saw you were curious about our products. My name is X from StoreNano, feel free to save my number and send me a text if you have any questions or concerns. If you're ready to",
      timestamp: "12:55 PM",
      isOutgoing: true
    },
    {
      content: "My Name is Noor and i am a full stack developer. I have been working in this field for more than 1 year. I have worked on many projects and have developed many websites. I have also worked on many projects in react and next js. I recently completed my graduation in computer science and now i am working as a full stack developer. ",
      timestamp: "12:52 PM",
      sender: "Oğuz Yağız Kara",
      avatar: "https://avatars.githubusercontent.com/u/144549805?v=4",
      isOutgoing: false
    },
    
  ];

  return (
    <div className="flex max-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
        </div>
        <ChatInput />
      </div>
      <CustomerInfo />
    </div>
  );
}

export default App;
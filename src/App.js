import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

const App = () => {
    const chatEngineProjectId = "0081bc1c-e91e-4ffb-bdf6-65bac4c374b7";
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (  
        <>
            <ChatEngine 
                height="100vh"
                projectID={chatEngineProjectId}
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </>
    );
}
 
export default App;
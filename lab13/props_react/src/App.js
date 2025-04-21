import './App.css';
import "./index.css"
import User from "./comments"
import User_feedback from "./feedback"

import cactusicon from "./images/batman_icon.png"
import facemanicon from "./images/user_icon.png"
import headseticon from "./images/woman_icon.png"


function App() {
  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>      
        <User_feedback><User image={cactusicon} username="Mr. cactus" date="04/01/25" usercomment="Great Job!" /></User_feedback>
        <User_feedback><User image={facemanicon} username="Clark" date="04/05/25" usercomment="I need more rest" /></User_feedback>
        <User_feedback><User image={headseticon} username="Jessica" date="04/10/25" usercomment="Glad to" /></User_feedback>
      </main>



    </>
  );
}

export default App;
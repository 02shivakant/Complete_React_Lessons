import { useState } from 'react'
import IsActive from './components/IsActive'
import './App.css'

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div>
      <IsActive
        title="Abhinav Gupta"
        isActive={activeSection === 1}
        onClick={() => setActiveSection(1)}
      >
        <h3> He is from Bihar and he is also cunning in terms of with his closed ones.</h3>
        <p>Abhinav has mastery in CC </p>
      </IsActive>

      <IsActive
        title="Mayank Acharya "
        isActive={activeSection === 2}
        onClick={() => setActiveSection(2)}
      >
        <h3>Mayank is good guy but when you need him most he will not available for you.</h3>
        <p>
          
          Abhinav is bestfreind of him but not loyal with him
        </p>
      </IsActive>
    </div>
  );
};

export default App;



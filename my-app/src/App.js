import React, {useState, useCallback} from 'react';
import ItemList from './ItemList';

function App(props) {

  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(0)


  const styles = {
    color: colored ? "crimson" : "green"
  }

  const AddCount = () => {
    setCount(prev => prev + 1)
  }

  const changeColor = () => {
    setColored(prev => !prev)
  }

  const generetItems = useCallback( () => {
    return new Array(count).fill("").map((_, index) => index + 1) 
  }, [count])

  return (
    <div>
      <p className="font" style={styles}>Counter: {count}</p>
      <button onClick={AddCount}>Add Count</button>
      <button onClick={changeColor}>Change color</button>

      <ItemList generator={generetItems} />
    </div>
  );
}

export default App;
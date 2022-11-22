import './App.css';
import ClassComponentTwo from "./componets/classComponentTwo/ClassComponentTwo";
import ClassComponentOne from "./componets/classComponentOne/ClassComponentOne";
import HelloWorld from "./componets/helloWorld/HelloWorld";




function App() {

    const user = {name: "Anna", age: 19}

    return (
    <div className="App">
      <ClassComponentOne name="Anna" age="19"/>
      <ClassComponentTwo name="Anna" age="19"/>
        <HelloWorld/>
    </div>
  );
}

export default App;

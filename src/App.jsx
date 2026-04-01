
import Button from "./components/Button"
import Toggle from "./components/Toggle"
import HoverBox from "./components/HoverBox"
import TrafficLight from "./components/TrafficLight"
import TodoList from "./components/TodoList "

function App() {

  return (
    <>
    <div className="App">
      {/* excersize 1 for using prop */}
      <Button label= "Success" color="green"></Button>
      <Button label= "Delete" color="red"></Button>
      {/* Excersize 2 for Toggle using useState*/}
      <Toggle/>
      {/* Excersize 3 for HoverBox using transition */}
      <HoverBox/>
      {/* Excersize 4 for HoverBox using Conditional Rendering */}
      <TrafficLight color="red" />
      <TrafficLight color="yellow" />
      <TrafficLight color="green" />
      {/* Excersize 5 for TodoList using map to iterate the data using key */}
      <TodoList/>
    </div>
    </>
  )
}

export default App

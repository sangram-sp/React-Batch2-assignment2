
import Button from "./components/Button"
import Toggle from "./components/Toggle"
import HoverBox from "./components/HoverBox"
import TrafficLight from "./components/TrafficLight"
import TodoList from "./components/TodoList "

function App() {

  return (
    <>
    <div className="App">
      <Button label= "Success" color="green"></Button>
      <Button label= "Delete" color="red"></Button>
      <Toggle/>
      <HoverBox/>
      <TrafficLight color="red" />
      <TrafficLight color="yellow" />
      <TrafficLight color="green" />
      <TodoList/>
    </div>
    </>
  )
}

export default App

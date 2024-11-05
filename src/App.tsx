import './App.css'
import ApexCharts from './Chart.jsx'

function App() {
  return (
    <>
      <div>
        <ApexCharts title={"D7 Developer 7"} series={
          [
            {
              name: "Mr. Spenser",
              data: [5, 5, 3, 4, 5]
            }
          ]
        }/>
      </div>
    </>
  )
}

export default App

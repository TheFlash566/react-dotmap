// import './App.css'

// import Data from './Records.json';

// function App() {
//   return (
//     <div className="App">
//         <h1>JSON Practice</h1>
//         { 
//           Data && Data.map( record => {
//             return(
//               <div className='box' key={ record.id }>
//                 <h1>{record.title}</h1>
//                 <p>{record.content}</p>

//                 { record.tech && record.tech.map(dataa => {
//                   return(
//                    <div>
//                      {dataa.name}
//                    </div> 
//                   )
//                 })}
//               </div>
//             )
//           })
          
//         }
//     </div>
//   )
// }

// export default App
import Card from "./Card" 

function App() {
  return(
    <div className="App">
      <div style={{display: 'flex', width: '90%', margin: 'auto'}}>
        <Card />
      </div>
    </div>
  )
}



export default App
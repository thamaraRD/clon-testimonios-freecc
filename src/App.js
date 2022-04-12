import "./App.css";
import { TitleMain } from "./components/TitleMain";
import { Testimonial } from "./components/Testimonial";
import { Data } from "./components/Data";



function App() {
  return (
  
    <div className="App">
        <TitleMain />
      <div className="main-container">
      {Data.map(({name, country, photo, position, company, testimonial}, index) => {
          return(
            <Testimonial key={index} name={name} country={country} photo={photo} position={position} company={company} testimonial={testimonial} />
          )
      })}
      </div>
    </div>
    
  );
}

export default App;

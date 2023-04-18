import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import Create from "./create-notes";
// function App() {
//   return (
//     <div>
//       <Header />
//       <Create/>
//       <Notes />
//       <Notes />
//       <Footer />
//     </div>
//   );
// }

// export default App;



function App() {


  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
       
        {/* <p>{!data ? "Loading..." : data}</p> */}
        <Header/>
        <Notes />
        <Create/>
        <Footer/>
        
    </div>
    
  );
}

export default App;
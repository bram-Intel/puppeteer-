import React, { Component } from 'react';
import './App.css';

import FirstPost from './FirstPost/FirstPost'





class App extends Component {

  state = {
    loading: true,
    title: null,
    img: null
  }
 
async componentDidMount() {
   const response = await fetch('http://localhost:8080/')
    const data = await response.json() 

    console.log(data.name)
    console.log(data.image)
    this.setState({title : data.name , img : data.image, loading: false})
     

     }

  downloadRoute() {
    fetch('http://localhost:8080/get/')
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'bow.pdf';
          a.click();
        });
        //window.location.href = response.url;
    });
  }  

  downloadRouteImage() {
    fetch('http://localhost:8080/getImage')
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'images.png';
          a.click();
        });
        //window.location.href = response.url;
    });
  }  

  



 

  render() {

 

    return (
          <div className='App'>

     
        <h1>Puppeteer proj</h1>
        <br/><br/>

        <div className='container'>
       {this.state.loading  ?(<div>loading please wait...</div> ) : <div> <FirstPost name={this.state.title} image={this.state.img}/> </div>}
        </div>
         <br/><br/>
      

         <button className="btn btn-primary" onClick={this.downloadRoute} style={{margin : 5}} > 
  download pdf
</button>
<br/>

     <button className="btn btn-primary" onClick={this.downloadRouteImage}>
  download image
</button>


     </div>
      );
        
    }

       

}

export default App;
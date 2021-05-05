import React, { Component } from 'react'
import Recorder from 'react-mp3-recorder'
import ImageUploadButton from './ImageUploadButton'
import firebase from 'firebase'
import firebaseConfig from './firebase-config'
import './Recorder.css';
import  './music.png';
import  './upload.jpg';
import  './click.jpeg';
//firebase.initializeApp(firebaseConfig);
let counter=1;

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleClick2=this.handleClick2.bind(this);
    this.handleClick3=this.handleClick3.bind(this);
    this.handleClick4=this.handleClick4.bind(this);
    this.handleClick5=this.handleClick5.bind(this);
    this.handleClick6=this.handleClick6.bind(this);
    this.handleClick7=this.handleClick7.bind(this);
    this.handleClick8=this.handleClick8.bind(this);
}
  state={
    url1:'',
    url2:'',
    url3:'',
    url4:'',
    url5:'',
    url6:'',
    url7:'',
    url8:'',
    int:1,
    userid:''
    
  }
  
  handleClick() {
    console.log(counter);
    if(counter==1){
    firebase.storage().ref().child(this.props.id+`/Audio1.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  else{
    if(counter==2){
      firebase.storage().ref().child(this.props.id+`/Audio9.m4a`).getDownloadURL().then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'
      
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        const tmp = new Audio(url);
        tmp.play();
        console.log('yes');
      }).catch(function(error) {
        // Handle any errors
        console.log('error');
      });
    }
  }
  }
  handleClick2() {
    if(counter==1){
    firebase.storage().ref().child(this.props.id+`/Audio2.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  else{
    firebase.storage().ref().child(this.props.id+`/Audio10.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  }
  handleClick3() {
    if(counter==1){
    firebase.storage().ref().child(this.props.id+`/Audio3.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  else{
    firebase.storage().ref().child(this.props.id+`/Audio11.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  }
  handleClick4() {
    if(counter==1){
    firebase.storage().ref().child(this.props.id+`/Audio4.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  else{
    firebase.storage().ref().child(this.props.id+`/Audio12.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  }
  handleClick5() {
    if(counter==1){
    firebase.storage().ref().child(this.props.id+`/Audio5.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  else{
    firebase.storage().ref().child(this.props.id+`/Audio13.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  }
 
  handleClick6() {
    if(counter==1){
    firebase.storage().ref().child(this.props.id+`/Audio6.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  else{
    firebase.storage().ref().child(this.props.id+`/Audio14.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  }
  handleClick7() {
    if(counter==1){
    firebase.storage().ref().child(this.props.id+`/Audio7.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  else{
    firebase.storage().ref().child(this.props.id+`/Audio15.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  }
  handleClick8() {
    if(counter==1){
    firebase.storage().ref().child(this.props.id+`/Audio8.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  else{
    firebase.storage().ref().child(this.props.id+`/Audio16.m4a`).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      const tmp = new Audio(url);
      tmp.play();
      console.log('yes');
    }).catch(function(error) {
      // Handle any errors
      console.log('error');
    });
  }
  }

  increment(){
    if(counter==1){
      counter+=1;
    }

  
    }
    decrement(){
      if(counter==2){
        counter-=1;
      }
      
    
  
    }
  render() {
    console.log(this.state);
    console.log(this.props);
    return (<div className="flexboxcontainer">
      <div className="control">

        <Recorder
          onRecordingComplete={this._onRecordingComplete}
          onRecordingError={this._onRecordingError}
        />
        <div className="mode">
          <button style={{ width: "65px", marginLeft: "5px",marginTop:"8px", height: "40px" }} onClick={this.decrement}>Previous mode</button>
          <button style={{ width: "65px", marginLeft: "15px", marginTop:"8px", height: "40px" }} onClick={this.increment}>Next   mode</button>
          <button style={{ width: "65px", marginLeft: "650px",marginTop:"8px", height: "40px" }} onClick={this.logout}>Logout</button>
        </div>
      </div>
      <div className="flexboxcontainer1">
        <div className="button1">
        <div className="frame" style={{ border: "2px solid darkviolet "}}>
        <div style={{ width: "120px", height: "120px" }}>
          <ImageUploadButton style={{ width: "120px", height: "120px" }} storagePath="/firstMode" onError={error=>alert(error)} onSuccess={url=>this.setState({url1:url})} >
          <img src={this.state.url1===''?require('./click.jpeg'):this.state.url1} style={{ width: "100%", height: "100%" }}class="w3-round" alt="Upload Image1" /></ImageUploadButton>
           </div>
           </div>
           <button  style={{ width: "60px", height: "60px",borderColor:"darkviolet",marginLeft:"23px",marginTop:"15px"}} onClick={this.handleClick}><img style={{width:"22px",height:"22px"}}  src={require('./music.png')} /> press here</button>
        </div>

        <div className="button2">
        <div className="frame" style={{ border: "2px solid Indigo "}}>
          <div style={{ width: "120px", height: "120px" }}>
          <ImageUploadButton style={{ width: "120px", height: "120px" }} storagePath="/firstMode" onError={error=>alert(error)} onSuccess={url=>this.setState({url2:url})} >
          <img src={this.state.url2===''?require('./click.jpeg'):this.state.url2}  style={{ width: "100%", height: "100%" }} class="w3-round" alt="Upload Image2" /></ImageUploadButton>
          </div>
          </div>
          <button  style={{ width: "60px", height: "60px",borderColor:"Indigo",marginLeft:"23px",marginTop:"15px" }} onClick={this.handleClick2}><img style={{width:"22px", height:"22px"}} src={require('./music.png')} />press here</button></div>
       
        <div className="button3">
        <div className="frame" style={{ border: "2px solid maroon "}}>
        <div style={{ width: "120px", height: "120px" }}>
          <ImageUploadButton style={{ width: "120px", height: "120px" }} storagePath="/firstMode" onError={error=>alert(error)} onSuccess={url=>this.setState({url3:url})} >
          <img src={this.state.url3===''?require('./click.jpeg'):this.state.url3}  style={{ width: "100%", height: "100%" }} class="w3-round" alt="Upload Image3" /></ImageUploadButton>
         </div>
         </div>
          <button  style={{ width: "60px", height: "60px",borderColor:"maroon",marginLeft:"23px",marginTop:"15px" }} onClick={this.handleClick3}><img style={{width:"22px",height:"22px"}} src={require('./music.png')} />press here</button></div>
       
        <div className="button4">
        <div className="frame" style={{ border: "2px solid chocolate "}}>
        <div style={{ width: "120px", height: "120px" }}>
          <ImageUploadButton style={{ width: "120px", height: "120px" }} storagePath="/firstMode" onError={error=>alert(error)} onSuccess={url=>this.setState({url4:url})} >
          <img src={this.state.url4===''?require('./click.jpeg'):this.state.url4} style={{ width: "100%", height: "100%"}} class="w3-round" alt="upload image4" /></ImageUploadButton>
          </div>
          </div>
          <button  style={{ width: "60px", height: "60px" ,borderColor:"chocolate",marginLeft:"23px",marginTop:"15px"}} onClick={this.handleClick4}><img style={{ width: "22px", height: "22px" }} src={require('./music.png')} />press here</button></div>
      </div>
      <div className="flexboxcontainer2">
        <div className="button5">
        <div className="frame" style={{ border: "2px solid black "}}>
        <div style={{ width: "120px", height: "120px" }}>
          <ImageUploadButton style={{ width: "120px", height: "120px" }}storagePath="/firstMode" onError={error=>alert(error)} onSuccess={url=>this.setState({url5:url})} >
          <img src={this.state.url5===''? require('./click.jpeg'):this.state.url5} style={{ width: "120px", height: "120px" }} class="w3-round" alt="upload image5"  /></ImageUploadButton>
          </div>
          </div>
          <button  style={{ width: "60px", height: "60px",borderColor:"black" ,marginLeft:"23px",marginTop:"15px"}} onClick={this.handleClick5}><img style={{ width: "22px", height: "22px" }} src={require('./music.png')} />press here</button>
        </div>



        <div className="button6">
        <div className="frame" style={{ border: "2px solid grey "}}>
        <div style={{ width: "120px", height: "120px" }}>
          <ImageUploadButton style={{ width: "120px", height: "120px" }} storagePath="/firstMode" onError={error=>alert(error)} onSuccess={url=>this.setState({url6:url})} >
            <img src={this.state.url6===''?require('./click.jpeg'):this.state.url6} style={{ width: "100%", height: "100%" }} class="w3-round" alt="Upload Image6" /></ImageUploadButton>
          </div>
          </div>
          <button  style={{ width: "60px", height: "60px" ,borderColor:"grey",marginLeft:"23px",marginTop:"15px"}} onClick={this.handleClick6}><img style={{ width: "22px", height: "22px" }} src={require('./music.png')} />press here</button></div>
        
        
        
        <div className="button7">
        <div className="frame" style={{ border: "2px solid blue "}}>
          
          <div style={{ width: "120px", height: "120px" }}>
          <ImageUploadButton  storagePath="/firstMode" onError={error=>alert(error)} onSuccess={url=>this.setState({url7:url})} >
            <img src={this.state.url7===''?require('./click.jpeg'):this.state.url7} style={{ width: "100%", height: "100%" }} class="w3-round" alt="Upload Image7" /></ImageUploadButton>
          </div>
          </div>
          <button  style={{ width: "60px", height: "60px",borderColor:"blue",textAlign:"center",marginLeft:"23px",marginTop:"15px" }} onClick={this.handleClick7}><img style={{ width: "22px", height: "22px" }} src={require('./music.png')} /> press here</button></div>
       
       
        <div className="button8">
        <div className="frame" style={{ border: "2px solid darkgreen "}}>
        <div style={{ width: "120px", height: "120px" }}>
          
          
          <ImageUploadButton style={{ width: "100px", height: "100px" }} storagePath="/firstMode" onError={error=>alert(error)} onSuccess={url=>this.setState({url8:url})} >
          <img  src={this.state.url8===''?require('./click.jpeg'):this.state.url8}  style={{ width: "100%", height: "100%" }} class="w3-round" alt="Upload Image8" /></ImageUploadButton>
          </div>
          </div>
          <button   style={{ width: "60px", height: "60px", borderColor:"darkgreen ",marginLeft:"23px",marginTop:"15px" }} onClick={this.handleClick8}><img style={{ width: "22px", height: "22px" }}src={require('./music.png')}/> press here</button></div>
          
      </div>
    </div>
    )



  }
  logout() {
    firebase.auth().signOut();
}

  _onRecordingComplete = async (blob) => {
    console.log('recording', blob)
    //const audioName = `${Date.now}.m4a`;
    const audioName = `Audio`+ this.state.int+`.m4a`;
    this.setState({ uploading: true });
    //const ref = firebase.storage().ref().child(`audio/${audioName}`);
    const ref = firebase.storage().ref().child(this.props.id+`/${audioName}`);
    this.setState({userid:this.props.id})
    console.log(this.state.userid);
    ref.put(blob)
      .then(async (snapshot) => {
        const fullUrl = await snapshot.ref.getDownloadURL();
        // Upload the Url to Firebase realtime database...
        console.log('recordinggg', blob)
        this.state.int+=1;
      })
  
  }

  _onRecordingError = (err) => {
    console.log('recording error', err)
  }
}
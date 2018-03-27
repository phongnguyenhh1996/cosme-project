import React from 'react';
import ReactDOM from 'react-dom';
import './component/style.css';

class Display extends React.Component {
  constructor(props){
    super();
    this.state={
      user:[{name:"",email:"",emagelink:""}],
      showname:""
    
    };
    this.update=this.update.bind(this);
this.handleCount=this.handleCount.bind(this);
  }
  update(e){
    user:e.target.value
    

    
  }
  handleCount(){

     // alert('A name was submitted: ' + this.state.name);
     this.setState({
      showName:  this.state.showname
      
      
    });
    
  } 
render(){
  const showname=  this.state.user.map((user)=>{
    return(
  });
        <div>user.name</div>);
    return(
       <form className="form-signin">
                <h2 className="form-signin-heading"> USER </h2>
                <label> Name:</label>
                <input type="name" id="name" className="form-control" placeholder="Name" required autofocus  onChange={this.update}/>
                <br/>
                <label> Email:</label>
                <input type="email" id="email" className="form-control" placeholder="Email" required onChange={this.update}/><br/>
                <label> Image link:</label>
                <input type="text" id="image" className="form-control"  /><br/>

                <input type="submit" value="ADD" onClick={this.handleCount}/>
                <p> {this.state.showName}</p>
                <p> {this.state.showemail}</p>
            </form>
      });
    }

  }
ReactDOM.render(<Display/>, document.getElementById('root'));

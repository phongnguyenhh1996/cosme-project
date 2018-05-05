import React from 'react';
import * as CartActions from '../actions/CartActions';

class QuantityCount extends React.Component{
    constructor(props){
        super(props);
        this.state={count: this.props.qty};
    }
    componentWillReceiveProps(nextProps){
        this.setState({count: nextProps.qty});
    }
    updateQty(i){
        if (i>0){
            CartActions.updateQty(this.props.idItem, i);
        }   
    }
    handleChange(event) {
    this.setState(
        {count: event.target.value},
        ()=>{if(this.state.count>0){
            CartActions.updateQty(this.props.idItem, this.state.count)
            }
        }
    )
    }
    render(){
        return(
            <div className="input-group mb-2 col">
              <div className="input-group-prepend">
                <span className="input-group-text" onClick={this.updateQty.bind(this,(this.state.count-1))}>-</span>
              </div>
              <input type="number" value={this.state.count} className="form-control p-lg-0" onChange={this.handleChange.bind(this)}/>
              <div className="input-group-append">
                <span className="input-group-text" onClick={this.updateQty.bind(this,(this.state.count+1))}>+</span>
              </div>
            </div>
        );
    }
}

export default QuantityCount;
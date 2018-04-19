import React from 'react';

class RateStar extends React.Component{
    render(){
        let count=this.props.star;
        let stars=[];
        if (count == 0){
            return(
                <div className="rate-star">
                    <i className="fas fa-star fa-xs text-white"></i><i className="fas fa-star fa-xs text-white"></i><i className="fas fa-star fa-xs text-white"></i><i className="fas fa-star fa-xs text-white"></i><i className="fas fa-star fa-xs text-white"></i>
                </div>
            )
        } else{
        for (var i = 1; i <= 5; i++){
            if (count > 0){stars.push(<i className="fas fa-star fa-xs"></i>) ;count= count-1;}
                else {stars.push(<i className="fas fa-star fa-xs text-secondary"></i>);}
        }};
        return(
            <div className="rate-star">
               {stars}
            </div>
        );
    }
}

export default RateStar;
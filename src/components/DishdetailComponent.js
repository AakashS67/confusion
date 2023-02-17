import React  from 'react'
import { Card, CardImg, CardBody,  CardTitle } from 'reactstrap';

        function RenderComments({comments}) {
            if (comments == null) {
              //return <div></div>;
              <div className='col-12 col-md-5 m-1'>
              <h4>Comments</h4>
              <ul className="list-unstyled">{ comments}</ul>
          
            
          
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comments.comment}</p>
                  <p>
                   {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li> 
              );
            })};
              </div>
            return (
           <div></div>
            );
          }}
          


        function  RenderDish({dish}){
           // if (dish != null)
                return(
                  <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          
                        </CardBody>
                    </Card>
                  </div>  
                );
            //else{
                return(
                    <div></div>
                );
       // }
    
        }  


        render(){
          if (this.props.selectedDish == null) {
            return (<div></div>);
        }
 

            return(
                  <div className="row">
                      {this.renderDish(this.props.selectedDish)}
                      {this.renderComments(this.props.selectedDish.comments)}
                    </div>
           


            )

        }

export default DishdetailComponent;
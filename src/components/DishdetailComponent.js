import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.dishDetailsData,
    };
  }

  render() {
    const { data } = this.state;
    const dishesComment = data.comments.map((com) => {
  
      return (
          <div class="container">
            <CardBody key={com.id}>
          <CardText>Comment</CardText>
          <CardText>-- {com.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(com.date)))}</CardText>
        </CardBody>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <Card>
              <CardImg top src={data.image} alt={data.name} />
              <CardBody>
                <CardTitle>{data.name}</CardTitle>
                <CardText>{data.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5">
            <h2>Comment</h2>
            {dishesComment}
          </div>
        </div>
      </div>
    );
  }
}

export default Dishdetail;
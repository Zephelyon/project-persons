import {React,Component} from 'react';
import {connect} from 'react-redux'
import './DashBoard.scss';
import {Button,Card} from 'react-bootstrap';
import { Redirect } from 'react-router';

class profilePerson extends Component {


  handleBack = (e) => {

    this.props.history.replace('/')

  }

    render() {

        return(
        <Card className="text-center m-auto pt-3 w-25">
          <Card.Header>Person Profile</Card.Header>
          <Card.Img  variant="top" className="w-100 h-100" src="https://st3.depositphotos.com/1767687/16607/v/380/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg" />
          {this.props.person !== null ? (
            <Card.Body>
            <Card.Title>{this.props.person.name +" "+ this.props.person.lastname}</Card.Title>
            <Card.Text>
              {this.props.email}
            </Card.Text>
            <span className="blockquote-footer text-​justify">
              <cite title="">{this.props.person.phone}</cite>
            </span>
            <span className="blockquote-footer text-​justify">
              <cite title="">{this.props.person.city}</cite>
            </span>
            <span className="blockquote-footer text-​justify">
              <cite title="">{this.props.person.country}</cite>
            </span>
            <Button variant="secondary" className="mt-3" onClick={this.handleBack}>Go Back</Button>
            </Card.Body>
          ): (
            <Redirect to="/" />
          )}
         
        </Card>
                
    )}
}

const mapStateToProps = state => {
    return {
       person: state.person.person
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps,)(profilePerson);
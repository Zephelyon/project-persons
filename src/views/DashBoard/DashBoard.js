import {React,Component} from 'react';
import {connect} from 'react-redux'
import './DashBoard.scss';
import {Col,Button,Card,Row} from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import * as actions_persons from './../../store/actions/person'

const FormSchema = Yup.object().shape({

    name: Yup.string()
        .required(),
    lastname: Yup.string()
        .required(),
    email: Yup.string()
        .required()
        .email(),
    phone: Yup.number()
        .required(),
    city: Yup.string()
        .required(),
    country: Yup.string()
        .required(),

});


class DashBoard extends Component {


    savePerson = async (values) => {
        await this.props.addPerson(values)
        await this.props.history.push('/profile')
    }

    render() {

        return(
        <Card className="mt-5">
            <Card.Body>
            <Formik
                                    initialValues={{
                                        name: '',
                                        lastname: '',
                                        email: '',
                                        phone: '',
                                        city: '',
                                        country: '',
                                    }}
                                    validationSchema={FormSchema}
                                    onSubmit={this.savePerson}
                                >
                                    {({ errors, touched, values }) => (
   
            <Form className="w-75 m-auto" >
            <h1 className="text-center pt-5 pb-5"> Profile Create</h1>

              <Row>
                <Col xs="6">
                    <label>Name</label>
                    <Field type="text" maxLength="45" name="name" className="form-control" placeholder="Enter a name" />
                                                        {errors.name && touched.name ? (
                                                            <div className="invalid-feedback d-block">{errors.name}</div>
                                                        ) : null}    
                    </Col>
                <Col xs="6">
                    <label >Lastname</label>
                    <Field type="text" maxLength="45" name="lastname" className="form-control" placeholder="Enter a lastname" />
                                                        {errors.lastname && touched.lastname ? (
                                                            <div className="invalid-feedback d-block">{errors.lastname}</div>
                                                        ) : null}    
                    </Col>
                </Row> 

                <Row>
                    
                <Col xs="12" className="pt-4">
                <label >Email</label>
                <Field type="text" maxLength="45" name="email" className="form-control" placeholder="Enter a email" />
                                                        {errors.email && touched.email ? (
                                                            <div className="invalid-feedback d-block">{errors.email}</div>
                                                        ) : null}    
                
                </Col>
                    
                </Row>         

                <Row>
                    
                    <Col xs="4" className="pt-4">
                    <label>Phone</label>

                    <Field type="text" maxLength="45" name="phone" className="form-control" placeholder="Enter a phone" />
                                                            {errors.phone && touched.phone ? (
                                                                <div className="invalid-feedback d-block">{errors.phone}</div>
                                                            ) : null}    
                    
                    </Col>
                    <Col xs="4" className="pt-4">
                    <label >City</label>
    
                    <Field type="text" maxLength="45" name="city" className="form-control" placeholder="Enter a city" />
                                                            {errors.city && touched.city ? (
                                                                <div className="invalid-feedback d-block">{errors.city}</div>
                                                            ) : null}    
                    
                    </Col>
                    <Col xs="4" className="pt-4">
                    <label>Country</label>
    
                    <Field type="text" maxLength="45" name="country" className="form-control" placeholder="Enter a country" />
                                                            {errors.country && touched.country ? (
                                                                <div className="invalid-feedback d-block">{errors.country}</div>
                                                            ) : null}    
                    
                    </Col>
    
                        
                    </Row>         

        <Button variant="primary" type="submit" className="mt-4 float-right">
            Submit
        </Button>  
        </Form>
            )}  
        </Formik>
        </Card.Body>
    </Card>
    )}
}

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (person) => dispatch(actions_persons.addPerson(person)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps,)(DashBoard);
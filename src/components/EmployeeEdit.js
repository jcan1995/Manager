import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {

  state = { showModal: false };

  componentWillMount(){
    _.each(this.props.navigation.getParam('employee', {name: '', phone: '', shift: 'Monday'}), (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress(){
    const { name, phone, shift, navigation } = this.props;
    const employee  = this.props.navigation.getParam('employee', {name: '', phone: '', shift: 'Monday'});
    this.props.employeeSave({name, phone, shift, uid: employee.uid, navigation });
  }

  onTextPress(){
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept(){
    const { navigation } = this.props;
    const employee  = this.props.navigation.getParam('employee', {name: '', phone: '', shift: 'Monday'});
    const uid = employee.uid;
    
    this.props.employeeDelete({uid, navigation});
  }

  onDecline(){
    this.setState({showModal: false});
  }


   render() {
     return(
       <Card>
       <EmployeeForm />
        <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
        </CardSection>


        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
     );
   }
 }

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

 export default connect(mapStateToProps, {
   employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);

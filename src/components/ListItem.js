import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableHighlight, View } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends Component {


  /*<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>*/

  onRowPress(){
    // const {employee} = this.props;
     console.log(this.props.employee);

    this.props.navigation.navigate('employeeCreate', {
      employee: this.props.employee
    });
  }
//
  render() {
    const { name } = this.props.employee;
    return(
        <View>
          <TouchableHighlight onPress={this.onRowPress.bind(this)}>
            <CardSection>
              <Text style={styles.titleStyle}>
                  {name}
              </Text>
            </CardSection>
          </TouchableHighlight>
        </View>

    );
  }
}

const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
};

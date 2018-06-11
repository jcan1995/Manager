import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, View, TouchableHighlight } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentWillMount(){
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    /*Next props are the next set of props
    that this component will be rendered with.
    this.props is still the old set of props.
    */
    this.createDataSource(nextProps);

  }

  createDataSource({ employees }){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  // onRowPress(props,employee){
  //   this.props.navigation.navigate('employeeCreate');
  // }
  // <TouchableHighlight onPress={this.onRowPress.bind(this)}>

  renderRow(employee){
    return (
      <View>
          <ListItem
            employee={employee}
            navigation ={this.props.navigation}
          />
      </View>
    );
  }

  render() {
    return(
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}

      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name: 's', id: 'asdasdsa'}''
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

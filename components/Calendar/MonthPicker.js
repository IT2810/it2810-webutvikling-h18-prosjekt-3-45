import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import subMonths from 'date-fns/sub_months';
import addMonths from 'date-fns/add_months';
import format from 'date-fns/format';

class MonthPicker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() =>
            this.props.onChange(subMonths(this.props.selectedMonth, 1))
          }
        >
          <Text>Previous</Text>
        </Button>

        <View>
          <Text>{format(this.props.selectedMonth, 'MMMM YYYY')}</Text>
        </View>

        <Button
          onPress={() =>
            this.props.onChange(addMonths(this.props.selectedMonth, 1))
          }
        >
          <Text>Next</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default MonthPicker;

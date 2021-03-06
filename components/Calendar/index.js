import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import addDays from 'date-fns/add_days';
import isSameDay from 'date-fns/is_same_day';
import isSameMonth from 'date-fns/is_same_month';
import MonthPicker from './MonthPicker';
import Tile from './Tile';
import TodoAdder from '../TodoAdder';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

export class Calendar extends Component {
  state = {
    month: new Date(),
  };

  onMonthChange = month => {
    this.setState({
      month,
    });
  };

  render() {
    // The date on which the calendar should start, in order to align the
    // tiles with their respective days correctly.
    const start = startOfWeek(startOfMonth(this.state.month), {
      weekStartsOn: 1,
    });

    return (
      <Container style={styles.container}>
        <View>
          <MonthPicker
            onChange={this.onMonthChange}
            selectedMonth={this.state.month}
          />

          <View style={styles.calendar}>
            <Header title="Mon" />
            <Header title="Tue" />
            <Header title="Wed" />
            <Header title="Thu" />
            <Header title="Fri" />
            <Header title="Sat" />
            <Header title="Sun" />

            {[...Array(7 * 5)].map((_, i) => {
              const day = addDays(start, i);

              return (
                <Tile
                  day={day}
                  todos={this.props.todos.filter(todo =>
                    isSameDay(todo.date, day),
                  )}
                  index={i}
                  key={i}
                  active={isSameMonth(day, this.state.month)}
                />
              );
            })}
          </View>
        </View>
        <TodoAdder />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  header: {
    width: `${100 / 7}%`,
    alignItems: 'center',
    padding: 2,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },

  headerText: {
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Calendar);

import React, { Component } from 'react';
import { getSchedule } from '../../services/tvShowsData';
import ScheduleList from './ScheduleList';

class TodaySchedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      schedule: [],
      isLoading: true,
    }
  }

  fetchScheduleShows = async () => {
    const schedule = await getSchedule();
    this.setState({
      schedule,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.fetchScheduleShows();
  }

  render() {
    const { schedule, isLoading } = this.state;

    return (
      <div className="home-schedule">
        <div className="container">
          <div className="title">Schedule for today</div>
          {isLoading && <p>Loading...</p>}
          {schedule.length ?
            schedule.map((show,i) => {
            return <ScheduleList key={i} data={show}/> })
          : <p>No shows available.</p> }
        </div>
      </div>
    );
  }
}

export default TodaySchedule;

import React from "react";
import moment from "moment";
import "./timer.css";

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const millis = moment.duration(countdown._i, "milliseconds");
      const days = Math.trunc(millis.asDays());
      const hours = millis.hours();
      const minutes = millis.minutes();
      const seconds = millis.seconds();

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  //Add code here

  render() {
    let { days, hours, minutes, seconds } = this.state;

    if (!seconds) {
      seconds = 0;
    }

    return (
      <div>
        <h1 className="countdown-head">
          Coming&nbsp;&nbsp;to&nbsp;&nbsp;you&nbsp;&nbsp;in
        </h1>
        <div className="countdown-wrapper">
          {
            <div className="countdown-item">
              {days}
              <span>days</span>
            </div>
          }
          {
            <div className="countdown-item">
              {hours}
              <span>hours</span>
            </div>
          }
          {
            <div className="countdown-item">
              {minutes}
              <span>minutes</span>
            </div>
          }
          {
            <div className="countdown-item">
              {seconds}
              <span>seconds</span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Countdown;

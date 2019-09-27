import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

export class EventList extends Component {
  render() {
    return (
      <Fragment>
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </Fragment>
    );
  }
}

export default EventList;

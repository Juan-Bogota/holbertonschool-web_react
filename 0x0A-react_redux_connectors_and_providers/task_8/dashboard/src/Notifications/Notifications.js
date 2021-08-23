import React, { PureComponent, Fragment } from 'react';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';
import { connect } from "react-redux";
import {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import { getUnreadNotifications } from "../selectors/notificationSelector";

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
      setNotificationFilter,
    } = this.props;
    const show = css(displayDrawer ? styles.showOff : styles.showOn);
    return (
      <Fragment>
        <div
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
          id='menuItem'
        >
          <p className={show}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <p>Here is the list of notifications</p>
            <ul>
              {!listNotifications && (
                <NotificationItem
                  type="noNotifications"
                  value="No new notifications for now"
                />
              )}
              {listNotifications &&
                Object.values(listNotifications).map((notification) => (
                  <NotificationItem
                    key={notification.guid}
                    id={notification.guid}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={markNotificationAsRead}
                  />
                ))}

            </ul>
            <button
              type='button'
              aria-label='Close'
              onClick={handleHideDrawer}
              id='close'
              style={{
                display: 'inline-block',
                position: 'absolute',
                top: '56px',
                right: '16px',
                background: 0,
                border: 0,
                outline: 'none',
                cursor: 'pointer',
                zIndex: 1,
              }}
            >
              <img
                src={close_icon}
                alt=''
                style={{ width: '8px', height: '8px' }}
              />
            </button>
            <button
              type="button"
              className={css(styles.filterButton)}
              id="buttonFilterUrgent"
              onClick={() => {
                setNotificationFilter("URGENT");
              }}
            >
              ‼️
            </button>
            <button
              type="button"
              className={css(styles.filterButton)}
              id="buttonFilterDefault"
              onClick={() => {
                setNotificationFilter("DEFAULT");
              }}
            >
              💠
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: null,
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  markNotificationAsRead: () => { },
  fetchNotifications: () => { },
  setNotificationFilter: () => { },
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const opacityKf = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateYkf = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(-5px)',
  },

  '75%': {
    transform: 'translateY(5px)',
  },

  '100%': {
    transform: 'translateY(0)',
  },
};

const borderKf = {
  '0%': {
    border: `3px dashed cyan`,
  },

  '100%': {
    border: `3px dashed #e0344a`,
  },
};

const styles = StyleSheet.create({
  notifications: {
    fontSize: '20px',
    border: 'thin dotted #e0344a',
    padding: '4px 16px',
    float: 'right',
    animationName: [borderKf],
    animationDuration: '0.8s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    [screenSize.small]: {
      width: '90%',
      border: 'none',
      backgroundColor: 'white',
    },
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '16px',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKf, translateYkf],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },
  showOff: {
    marginRight: '8px',
    [screenSize.small]: {
      display: 'none',
    },
  },

  showOn: {
    marginRight: '8px',
  },
});

const mapStateToProps = (state) => {
  const unreadNotifications = getUnreadNotifications(state);

  return {
    listNotifications: unreadNotifications,
  };
};

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
  setNotificationFilter,
};


export default connect(mapStateToProps, mapDispatchToProps)(Notifications);


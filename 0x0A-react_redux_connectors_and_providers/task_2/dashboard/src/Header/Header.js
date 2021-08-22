import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";
import PropTypes from "prop-types";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logout } = this.props;
    return (
      <header className={css(styles.header)}>
        <img className={css(styles.logo)} src={logo} alt='logo' />
        <h1 className={css(styles.title)}>School dashboard</h1>
        {user && (
          <p id='logoutSection' className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logout} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </header>
    );
  }
}

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    color: '#e0344a',
    alignItems: 'center',
    borderBottom: 'thick solid #e0344a',
    width: '100%',
    position: 'fixed',
    backgroundColor: "white"
  },
  logo: {
    width: '144px',
    [screenSize.small]: {
      width: '240px',
    },
  },
  title: {
    margin: 0,
    [screenSize.small]: {
      fontSize: '40px',
    },
  },
  logoutSection: {
    color: 'black',
    position: 'absolute',
    right: 0,
    paddingRight: '20px',
    alignSelf: 'flex-end',
  },
  logoutSectionSpan: {
    fontStyle: 'italic',
    cursor: 'pointer',
  },
});

Header.contextType = AppContext;

Header.defaultProps = {
  user: null,
  logout: () => { },
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Footer({ user }) {
  return (

    <footer>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && <a href='#'>Contact us</a>}
    </footer>
  );

}
Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};


export default connect(mapStateToProps, null)(Footer);

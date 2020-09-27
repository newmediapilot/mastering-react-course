import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.NotFound} data-testid="NotFound">
    NotFound Component
  </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;

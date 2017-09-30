import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './theme.css';

export default function Repo({ theme, data }) {
  return (
    <div className={theme.repo}>
      <h3>
        {data.name}
      </h3>
      <span>
        {data.pullRequests.length}
      </span>
    </div>
  );
}

Repo.propTypes = {
  theme: PropTypes.shape(),
  data: PropTypes.shape({
    name: PropTypes.string,
    pullRequests: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

Repo.defaultProps = {
  theme: defaultTheme,
};

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../actions';

const List = props => {
  const { fetch, ads } = props;
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {ads.map(el => {
        return <div>{el.id}</div>;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { ads: state.ads };
};

export default connect(
  mapStateToProps,
  { fetch }
)(List);

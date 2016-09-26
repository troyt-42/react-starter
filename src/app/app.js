import React from 'react';
import { connect } from 'react-redux';

import { last, next } from '../actions/selector';

function mapStateToProps(state) {
  return {
    world: state.selector.get('name'),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    lastWorld: () => dispatch(last()),
    nextWorld: () => dispatch(next()),
  };
}
function App({world, nextWorld, lastWorld}) {
  return (
    <div>
      <div>
        Hello { world }!
      </div>
      <button className="btn btn-small mr1 btn-primary" onClick={ lastWorld }>Last World</button>
      <button className="btn btn-small btn-primary" onClick={ nextWorld }>Next World</button>
    </div>
  );
}

App.propTypes = {
  world: React.PropTypes.string,
  nextWorld: React.PropTypes.func,
  lastWorld: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

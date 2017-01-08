import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'next/link';
import * as demoActions from '../../actions/demoActions';
class Home extends Component {
  static propTypes = {
    demoString: PropTypes.string.isRequired,
    setString: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.changeDemoString = this.changeDemoString.bind(this);
  }

  componentDidMount() {
    const { setString } = this.props;
    alert('setting default demo string to store');
    setString();
  }

  changeDemoString(theString: String) {
    const { setString } = this.props;
    console.log('changing demo string to: ', theString);
    setString(theString);
  }

  render() {
    const { demoString } = this.props;
    return (
      <div>
        <button
          onClick={() => this.changeDemoString('not the default string')}
        >
          change demo string to 'not the default string'
        </button>
        <button
          onClick={() => this.changeDemoString()}
        >
          change back to default
        </button>
        <Link href="/about">go to about</Link>
        <p>{demoString}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    demoString: state.demoString
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(demoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
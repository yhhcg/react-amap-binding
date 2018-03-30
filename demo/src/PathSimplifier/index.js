/**
 * @module Demo/PathSimplifierPage
 */
import React from 'react';
import {object} from 'prop-types';
import {withStyles} from 'material-ui';
import {PathSimplifier} from 'react-amap-binding';

import AMap from '../AMapPage';

const styles = (theme) => ({
  mapContainer: {
    width: '100vw',
    height: '100vh',
  },
});

@withStyles(styles)
/**
 * PathSimplifier page
 */
export default class PathSimplifierPage extends React.Component {
  static propTypes = {
    classes: object,
  };

  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      pathSimplifier: [{
        name: '轨迹0',
        path: [
          [120.432955, 30.234711],
          [120.183016, 30.243906],
          [120.163431, 30.254176],
        ],
      }, {
        name: '轨迹1',
        path: [
          [120.177591, 30.217746],
          [120.215529, 30.250078],
          [120.207117, 30.276618],
        ],
      }],
    };
  }

  /**
   * Test Marker component update functionalities
   */
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        pathSimplifier: [{
          name: '轨迹0',
          path: [
            [120.239218, 30.235842],
            [120.181196, 30.264609],
            [120.167635, 30.246223],
          ],
        }],
      });
    }, 5000);
  }

  /**
   * Show AMap with full screen width and height
   * @return {Component} - Page
   */
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.mapContainer}>
        <AMap>
          <PathSimplifier
            data={this.state.pathSimplifier}
            getPath={(pathData, pathIndex) => {
              return pathData.path;
            }}
            getHoverTitle={() => {
              return null;
            }}
            autoSetFitView={true}
            clickToSelectPath={false}
          />
        </AMap>
      </div>
    );
  }
}

/**
 * This module specifies routes of this app
 * @module Demo/Router
 * @requires react
 * @requires react-router-dom
 * @requires {@link module:Post}
 */
import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

// Require Pages
import Amap from './AMapPage';
import Marker from './MarkerPage';
import PathSimplifier from './PathSimplifier';
import MassMarks from './MassMarks';

/**
 * @return {Router}
 */
export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Amap} />
        <Route exact path="/marker" component={Marker} />
        <Route exact path="/pathSimplifier" component={PathSimplifier} />
        <Route exact path="/massMarks" component={MassMarks} />
      </div>
    </BrowserRouter>
  );
}

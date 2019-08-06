import React from "react";
import {AppRegistry} from 'react-native';

// Components
import App from "./src/index";

const app = () => <App />;

console.disableYellowBox = true;

AppRegistry.registerComponent("radioStreaming", () => app);
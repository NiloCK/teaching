import RX = require('reactxp');
import App = require('./App');
import Recorder from './appUtilities/Recorder'

Recorder.init();

RX.App.initialize(false, false);
RX.UserInterface.setMainView(<App />);

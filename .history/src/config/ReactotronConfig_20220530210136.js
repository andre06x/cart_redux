import Reactotron from 'reactotron-react-js'
import {reactotronRedux} from "reactotron-redux";
import axios from 'axios';

if(process.env.NODE_ENV === 'development'){
  const tron = Reactotron.configure()
  .use(reactotronRedux())
  .connect();

  tron.clear();

//   console.tron = tron;
}



console.log('teste')
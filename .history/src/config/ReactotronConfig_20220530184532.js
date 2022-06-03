import {trackGlobalErrors} from 'reactotron-react-js'

trackGlobalErrors
  .configure() // we can use plugins here -- more on this later
  .connect() // let's connect!
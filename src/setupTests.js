// this file solves some issues with enzyme 3

import requestAnimationFrame from './tempPolyfills'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

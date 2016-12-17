// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */
export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: CoreLayout,
    indexRoute: Home(store)
  }
  return routes
}

export default createRoutes

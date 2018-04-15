import Home from '../pages/HomePage'
import Jobs from '../pages/JobsPage'
import JobDetail from '../pages/JobDetailPage'

const types = 'frontend'
const services = 'frontendbr'

export const publicRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: `/jobs/:type(${types})/:jobServiceName(${services})`,
    component: Jobs
  },
  {
    path: `/jobs/:type(${types})/:jobServiceName(${services})/:jobId`,
    component: JobDetail
  }
]

import Home from '../pages/HomePage'
import Jobs from '../pages/JobsPage'
import JobDetail from '../pages/JobDetailPage'
import AppTemplate from '../components/template/AppTemplate'

const types = 'frontend|backend'
const services = 'frontendbr|reactbrasil|backendbr|soujava'

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
].map(route => ({ ...route, template: AppTemplate }))

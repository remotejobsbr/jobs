import Home from '../pages/HomePage'
import Jobs from '../pages/JobsPage'
import JobDetail from '../pages/JobDetailPage'
import AppTemplate from '../components/template/AppTemplate'

const types = 'frontend|backend|mobile'
const services = 'frontendbr|reactbrasil|backendbr|soujava|androiddevbr|cocoaheadsbrasil|phpdevbrasil'

export const publicRoutes = [
  {
    path: '/',
    component: Home,
    template: AppTemplate
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

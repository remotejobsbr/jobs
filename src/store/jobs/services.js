import http from '../../utils/http'

// Endpoints
const jobEndpoints = {
  frontendbr: '/repos/frontendbr/vagas/issues?labels=Remoto - Total&state=open&page=1&per_page=10'
}

export const fetchJobs = (jobServiceName) => {
  return http
    .get(jobEndpoints[jobServiceName])
    .then(res => res.data)
}

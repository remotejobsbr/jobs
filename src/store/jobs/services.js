import http from '../../utils/http'

// Endpoints
const jobEndpoints = {
  frontendbr: '/repos/frontendbr/vagas/issues?labels=Remoto&state=open',
  reactbrasil: '/repos/react-brasil/vagas/issues?labels=alocação/Remoto&state=open',
  backendbr: '/repos/backend-br/vagas/issues?labels=Remoto&state=open',
  soujava: '/repos/soujava/vagas-java/issues?labels=Remoto&state=open',
  androiddevbr: '/repos/androiddevbr/vagas/issues?labels=Remoto&state=open',
  cocoaheadsbrasil: '/repos/CocoaHeadsBrasil/vagas/issues?labels=Remoto&state=open',
  phpdevbrasil: '/repos/phpdevbr/vagas/issues?labels=alocação/Remoto&state=open'
}

export const fetchJobs = (jobServiceName) => {
  return http
    .get(jobEndpoints[jobServiceName])
    .then(res => res.data)
}

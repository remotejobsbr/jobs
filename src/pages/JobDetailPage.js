import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import { fetchJobs } from '../store/jobs/actions'
import BackAppbar from '../components/appbar/BackAppbar'
import WidthContainer from '../components/container/WidthContainer'
import {
  jobTitle,
  contentContainer,
  jobNotice
} from './styles/JobDetailPage.style'
class jobDetailPage extends Component {
  componentDidMount = () => {
    const {
      type,
      jobServiceName
    } = this.props.match.params

    this.props.fetchJobs({ type, jobServiceName })
  }

  get params () {
    return this.props.match.params
  }

  get isFetched () {
    const {
      type,
      jobServiceName
    } = this.props.match.params

    return !!this.props.jobs[type][jobServiceName]
  }

  get job () {
    const {
      type,
      jobServiceName,
      jobId
    } = this.props.match.params

    const jobs = this.props.jobs[type][jobServiceName]
    return jobs.find(job => job.id === Number(jobId)) || false
  }

  removeComments = (text) => text.replace(/<!--(.|\n|\t|\r)*?-->/gi, '')

  render = () => (
    <div>
      <BackAppbar to={`/jobs/${this.params.type}/${this.params.jobServiceName}`} />

      <WidthContainer>
        {this.isFetched && (
          <div className={contentContainer}>
            <h1 className={jobTitle}>{this.job.title}</h1>
            <div>
              <ReactMarkdown
                escapeHtml={false}
                source={this.removeComments(this.job.body)}
              />
            </div>

            <div className={jobNotice}>
            Em caso de dúvidas, entre <a href={this.job.html_url}>diretamente no link da vaga</a>
            </div>
          </div>
        )}

        {this.isFetched && this.job === false && (
          <div>Não há Trabalho aberto neste link</div>
        )}
      </WidthContainer>
    </div>
  )
}

jobDetailPage.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
  jobs: PropTypes.object,
  match: PropTypes.object
}

jobDetailPage.defaultProps = {
  frontendbr: undefined
}

const mapStateToProps = state => ({
  jobs: state.jobs
})

const mapDispatchToPros = dispatch =>
  bindActionCreators(
    {
      fetchJobs
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToPros)(jobDetailPage)

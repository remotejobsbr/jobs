import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import { fetchJobs } from '../store/jobs/actions'

class jobDetailPage extends Component {
  componentDidMount = () => {
    const {
      type,
      jobServiceName
    } = this.props.match.params

    this.props.fetchJobs({ type, jobServiceName })
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

  render = () => (
    <div>
      {this.isFetched && (
        <div>
          <h1>{this.job.title}</h1>
          <div>
            <ReactMarkdown
              source={this.job.body}
            />
          </div>
        </div>
      )}
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

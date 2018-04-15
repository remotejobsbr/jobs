import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchJobs } from '../store/jobs/actions'

class JobsPage extends Component {
  componentDidMount = () => {
    const { type, jobServiceName } = this.params
    this.props.fetchJobs({ type, jobServiceName })
  }

  get params () {
    return this.props.match.params
  }

  get jobs () {
    const { type, jobServiceName } = this.params
    const jobs = this.props.jobs[type][jobServiceName]

    return jobs
  }

  render = () => (
    <div>
      {this.jobs && this.jobs.map(job => (
        <p key={job.id}>
          <Link
            to={`/jobs/${this.params.type}/${this.params.jobServiceName}/${job.id}`}
          >
            {job.title}
          </Link>
        </p>
      ))}
    </div>
  )
}

JobsPage.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
  jobs: PropTypes.object
}

JobsPage.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToPros)(JobsPage)

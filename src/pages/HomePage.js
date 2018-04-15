import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchJobs } from '../store/jobs/actions'

class HomePage extends Component {
  componentDidMount = () => {
    this.props.fetchJobs('frontendbr')
  }

  render = () => (
    <div>
      {this.props.frontendbr && this.props.frontendbr.map(job => (
        <p key={job.id}>{job.title}</p>
      ))}
    </div>
  )
}

HomePage.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
  frontendbr: PropTypes.array.isRequired
}

HomePage.defaultProps = {
  frontendbr: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  frontendbr: state.jobs.frontEnd.frontendbr
})

const mapDispatchToPros = dispatch =>
  bindActionCreators(
    {
      fetchJobs
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToPros)(HomePage)

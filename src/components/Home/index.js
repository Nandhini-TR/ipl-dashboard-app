import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'
/* eslint-disable react/no-unknown-property */
class Home extends Component {
  state = {isLoading: true, iplList: []}

  componentDidMount() {
    this.getIplListItem()
  }

  getIplListItem = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const team = data.teams
    const formattedData = team.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({iplList: formattedData, isLoading: false})
  }

  renderiplList = () => {
    const {iplList} = this.state
    return (
      <ul className="ul-list">
        {iplList.map(each => (
          <TeamCard key={each.id} iplList={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-bg-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL DashBoard</h1>
        </div>

        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderiplList()
        )}
      </div>
    )
  }
}

export default Home

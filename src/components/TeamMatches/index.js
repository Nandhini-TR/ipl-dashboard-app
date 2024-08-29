import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
/* eslint-disable react/no-unknown-property */
class TeamMatches extends Component {
  state = {
    recentMatchesData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getIplMatchData()
  }

  getFormattedObject = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getIplMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedObject(data.latest_match_details),
      recentMatches: data.recent_matches.map(item =>
        this.getFormattedObject(item),
      ),
    }

    this.setState({recentMatchesData: formattedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {recentMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = recentMatchesData

    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <p className="lastest-match">Latest Matches</p>
        <LatestMatch
          key={latestMatchDetails.id}
          matchDetails={latestMatchDetails}
        />
        <ul className="match-card-ul-list">
          {recentMatches.map(matches => (
            <MatchCard key={matches.id} matchCardItems={matches} />
          ))}
        </ul>
      </div>
    )
  }

  getTeamClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return id.toLowerCase()
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-route-container ${this.getTeamClassName()}`
    return (
      <div className={className}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches

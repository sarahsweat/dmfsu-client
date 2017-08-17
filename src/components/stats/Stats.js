import React from 'react'
import { Statistic, Image, Progress, Container, Header, Divider, Card } from 'semantic-ui-react'

const Stats = (props) => {

  return (
    <Card fluid className='bg shadow-box'>
      <Card.Content>
      <Header as='h1' className='sub-title'>Current Standings</Header>
      <br/>
      <Statistic.Group widths='four'>
      <Statistic>
        <Statistic.Value><Image src='https://assets.donordrive.com/clients/cmndancemarathon/img/avatar-team-default.gif' className='circular inline' />{props.users.length}</Statistic.Value>
        <Statistic.Label>Fundraisers</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{props.teams.length}</Statistic.Value>
        <Statistic.Label>Teams</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value> {props.donations.length}</Statistic.Value>
        <Statistic.Label>Donations</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value> ${props.donations.reduce((sum, value) => sum + value.amount, 0).toLocaleString()}</Statistic.Value>
        <Statistic.Label>Raised</Statistic.Label>
      </Statistic>
    </Statistic.Group>
    <Divider/>
    <Header as='h2' className='stat-sub' textAlign='center'>We are {Math.round((props.donations.reduce((sum, value) => sum + value.amount, 0)/100000)*100)}% of the way to our goal of ${(100000).toLocaleString()}!</Header>
    <Progress percent={Math.round((props.donations.reduce((sum, value) => sum + value.amount, 0)/100000)*100)} progress success/>
  </Card.Content>
</Card>
  )

}

export default Stats

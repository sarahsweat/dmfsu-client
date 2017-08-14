import React from 'react'
import { Statistic, Image, Progress, Container, Header, Divider, Grid } from 'semantic-ui-react'
import Bar from 'react-chartjs-2';

export default class MilestonesContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      data: []
    }
  }

  componentWillMount = () => {
    fetch('http://localhost:3000/api/v1/graph')
    .then(data => data.json())
    .then(data => this.setState({data}))
  }

  render() {
  return (
    <Container>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src='./Milestones.png'/>
          </Grid.Column>
          <Grid.Column>
            <Bar  type='bar' data={
              {   labels: ["$300", "$500", "$750", "$1000", "$1500", "$2000", "$2300"],
                  datasets: [{
                    label: "Dancers",
                    data: this.state.data,
                    backgroundColor: '#782f40',
                    hoverBackgroundColor: '#CEB888'}]
            }}
            options={{maintainAspectRatio: false,
                        scales: {
                          yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                          }]
                        }
                      }}
          />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </Container>

  )}
}

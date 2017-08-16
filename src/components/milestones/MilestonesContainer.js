import React from 'react'
import { Statistic, Image, Progress, Container, Header, Divider, Grid, Card } from 'semantic-ui-react'
import Bar from 'react-chartjs-2';

export default class MilestonesContainer extends React.Component {
  constructor(props){
    super(props)




  }
  //
  // componentWillMount = () => {
  //   fetch('http://localhost:3000/api/v1/graph')
  //   .then(data => data.json())
  //   .then(data => this.setState({data}))
  // }

  render() {
  return (
    <Container>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image className='shadow-box' shape='rounded' src='./Milestones.png'/>
          </Grid.Column>
          <Grid.Column>
            {/* <Card >
              <Card.Content> */}
                <Bar  type='bar'
                    data={
                      { labels: ["$300", "$500", "$750", "$1000", "$1500", "$2000", "$2300"],
                        datasets: [{
                          label: "# of Dancers",
                          data: this.props.data,
                          backgroundColor: '#782f40',
                          hoverBackgroundColor: '#000000'}]
                      }}
                options={{maintainAspectRatio: false,
                          title:{
                              display: true,
                              text: "Money Raised",
                              fontSize: 15,
                              position: "bottom",
                              fontColor: "black"
                            },
                        scales: {
                          yAxes: [{
                            ticks: {
                                  beginAtZero: true
                              }
                            }]
                        }
                      }}  />
                    {/* </Card.Content>
                  </Card> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )}
}

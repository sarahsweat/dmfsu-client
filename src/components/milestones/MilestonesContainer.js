import React from 'react'
import { Image, Container, Grid, } from 'semantic-ui-react'
import Bar from 'react-chartjs-2';

export default class MilestonesContainer extends React.Component {
  constructor(props){
    super()
  }

  render() {
  return (
    <Container >
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image className='shadow-box' shape='rounded' src='./Milestones.png'/>
          </Grid.Column>
          <Grid.Column  style={{padding: '25px 25px 25px 25px'}}>
                <Bar  type='bar'
                      data={{
                        labels: ["$300", "$500", "$750", "$1,000", "$1,500", "$2,000", "$2,200"],
                        datasets: [{
                          label: "# of Dancers",
                          data: this.props.data,
                          backgroundColor: '#782f40',
                          hoverBackgroundColor: '#000000'}]
                      }}
                      options={{
                        maintainAspectRatio: false,
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )}
}

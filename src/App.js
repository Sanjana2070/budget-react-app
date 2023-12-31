import { Container, Grid, Header, Icon, Segment, Statistic, Button, Form} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1' style={{textAlign:"center"}}> Budget </Header>


      <Statistic> 
        <Statistic.Label>Your Balance: </Statistic.Label>
        <Statistic.Value> 2,550.53</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="tiny" color="green">
              <Statistic.Label style={{textAlign:"left"}}>
                Income: 
              </Statistic.Label>
              <Statistic.Value> 1,045.50</Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
          <Statistic size="tiny" color="red">
              <Statistic.Label style={{textAlign:"left"}}>
                Expenses: 
              </Statistic.Label>
              <Statistic.Value> 623.50</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>  
    </Segment>

    <Header as='h3'>History</Header>
    <Segment color='red'>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Domain Fees</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$25.00</Grid.Column>
          <Grid.Column width={3}>
          <Icon name='edit' bordered/>
          <Icon name='trash'bordered/>
          </Grid.Column>
          
        </Grid.Row>
        </Grid> 
    </Segment> 

    <Segment color='green'>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Class Fee Sanjana</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$40.00</Grid.Column>
          <Grid.Column width={3}>
          <Icon name='edit' bordered/>
          <Icon name='trash'bordered/>
          </Grid.Column>
          
        </Grid.Row>
        </Grid> 
    </Segment> 


    <Segment color='green'>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Class Fee Ruhi</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$40.00</Grid.Column>
          <Grid.Column width={3}>
          <Icon name='edit' bordered/>
          <Icon name='trash'bordered/>
          </Grid.Column>
          
        </Grid.Row>
        </Grid> 
    </Segment> 

    <Header as='h3'>Add new transaction</Header>
    <Form unstackable>
      <Form.Group>
        <Form.Input 
        icon='tags'
        width={12}
        label='Description'
        placeholder='New shiny thing'/>
        <Form.Input 
        width={4}
        label='value'
        placeholder='100.00'
        icon='dollar'
        iconPosition='left'></Form.Input>
      </Form.Group>
      <Button.Group>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary>OK</Button>
      </Button.Group>
    </Form>
    </Container>
  );
}

export default App;

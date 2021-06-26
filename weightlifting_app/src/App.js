
import React, {useRef} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  Collapse,
  Button,
  ButtonGroup,
  IconButton
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RecordSnatch from './pages/record-snatch'


const App = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Router>
      <Card> {/**will probably make these cards their own components later */}
        <CardMedia image='' title='Snatch'/>
        <CardContent>
          <Typography variant='h2'>
            Snatch
          </Typography>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardContent>
        <Collapse in={expanded} unmountOnExit>
          <CardActions>
            <ButtonGroup
              orientation='vertical'
              variant='text'
            >
              <Button>
                <Link to='/snatch/starting'>
                  <Typography>
                    Starting position
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link to='snatch/extension'>
                  <Typography>
                    Extension
                  </Typography>
                </Link>
              </Button>
            </ButtonGroup>
          </CardActions>
        </Collapse>
      </Card>
      <Card>
        <CardMedia image='' title='Clean'/>
        <CardContent>
          <Typography variant='h2'>
            Clean
          </Typography>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardContent>
        <Collapse in={expanded} unmountOnExit>
          <CardActions>
            <ButtonGroup
              orientation='vertical'
              variant='text'
            >
              <Button disabled>
                <Link to='/clean/starting'>
                  <Typography>
                    Starting position
                  </Typography>
                </Link>
              </Button>
              <Button disabled>
                <Link to='clean/extension'>
                  <Typography>
                    Extension
                  </Typography>
                </Link>
              </Button>
            </ButtonGroup>
          </CardActions>
        </Collapse>
      </Card>

      {/*router stuff*/}
      <Switch>
        <Route path='/snatch/:drill'>
          <RecordSnatch/>
        </Route>
        {/**no route for cleans yet */}
      </Switch>
    </Router>
  )
}

export default App;

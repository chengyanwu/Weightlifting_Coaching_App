import React from 'react'
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
import {Link} from 'react-router-dom'

const CardWithLinks = ({title, disabled}) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardMedia image='' title={title}/>
      <CardContent>
        <Typography variant='h2'>
          {title}
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
            <Button disabled={disabled}>
              <Link to={`/${title}/starting`}>
                <Typography>
                  Starting position
                </Typography>
              </Link>
            </Button>
            <Button disabled={disabled}>
              <Link to={`/${title}/extension`}>
                <Typography>
                  Extension
                </Typography>
              </Link>
            </Button>
          </ButtonGroup>
        </CardActions>
      </Collapse>
    </Card>
  )
}

export default CardWithLinks
import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Works extends Component {

  render(){
    return(
      <div className = "work-container">

        <Card className="card">
         <CardMedia
           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
         >
           <img src="http://oboawdjd1.bkt.clouddn.com/1220918704505.jpg" />
         </CardMedia>
        </Card>
        <Card className="card">
         <CardMedia
           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
         >
           <img src="http://oboawdjd1.bkt.clouddn.com/1220918704505.jpg" />
         </CardMedia>
        </Card>

        <Card className="card">
         <CardMedia
           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
         >
         <img src="http://oboawdjd1.bkt.clouddn.com/1220918704505.jpg" />
         </CardMedia>
        </Card>

        <Card className="card">
         <CardMedia
           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
         >
         <img src="http://oboawdjd1.bkt.clouddn.com/1220918704505.jpg" />
         </CardMedia>
        </Card>

        <Card className="card">
         <CardMedia
           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
         >
         <img src="http://oboawdjd1.bkt.clouddn.com/1220918704505.jpg" />
         </CardMedia>
        </Card>

      </div>
    )
  }
}
export default Works;

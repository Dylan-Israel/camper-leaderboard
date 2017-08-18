import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image'
class Row extends Component {

static propTypes ={
    pointsArray: PropTypes.array.isRequired
}

render() {
    const {pointsArray} = this.props;
    return (
  pointsArray.map((row, index) => (
                <tr key={row.username}>
                  <td>{index + 1}</td>
                  <td><a href={`https://www.freecodecamp.org/${row.username}`} ><Image src={row.img} className='imgHeight' circle alt='User' /> {row.username}</a></td>
                  <td>{row.recent}</td>
                  <td>{row.alltime}</td>
                </tr>
              ))
    )
}
    
}

export default Row
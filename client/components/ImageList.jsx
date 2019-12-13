import React from 'react';
import ReactDom from 'react-dom';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='imageList'>
        {this.props.images.map((image, index) => (
          <div key={index} index={index} className={`productImage${index === this.props.selected? ' selected' : ''}`} style={{backgroundImage: `url(${image})`}}></div>
        ))}
      </div>
    )
  }
}

export default ImageList;
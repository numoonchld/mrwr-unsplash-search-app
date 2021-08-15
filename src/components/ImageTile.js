import React from "react";

class ImageTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgSpan: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    // Get Image height after image loads using callback for `load` event
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const imgHeight = this.imageRef.current.clientHeight;
    const imgSpan = Math.ceil(imgHeight / 10);
    this.setState({ imgSpan });
  };

  render() {
    const { image } = this.props;
    return (
      <>
        <div style={{ gridRowEnd: `span ${this.state.imgSpan}` }}>
          <img
            ref={this.imageRef}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </div>
      </>
    );
  }
}

export default ImageTile;

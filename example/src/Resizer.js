import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import ResizableRect from 'react-resizable-rotatable-draggable';

class Resizer extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      width: 100,
      height: 100,
      top: 100,
      left: 100,
      rotateAngle: 0
    }
  }

  handleResize = ({ top, left, width, height }, isShiftKey, type) => {
    this.setState({
      top: Math.round(top),
      left: Math.round(left),
      width: Math.round(width),
      height: Math.round(height)
    })
  }

  handleRotate = (rotateAngle) => {
    this.setState({ rotateAngle })
  }

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }

  handleRotateEnd = () => console.log('RotateEnd')

  handleRotateStart = () => console.log('RotateStart')

  render () {
    const { top, left, width, height, rotateAngle } = this.state
    return <ResizableRect {...{
      top,
      left,
      width,
      height,
      rotateAngle,
      // aspectRatio: false,
      minWidth: -Infinity,
      minHeight: -Infinity,
      zoomable: 'e, s, se',
      rotatable: false,
      onRotateStart: this.handleRotateStart,
      onRotate: this.handleRotate,
      onRotateEnd: this.handleRotateEnd,
      // onResizeStart: this.handleResizeStart,
      onResize: this.handleResize,
      // onResizeEnd: this.handleUp,
      // onDragStart: this.handleDragStart,
      //onDrag: this.handleDrag
      // onDragEnd: this.handleDragEnd,
    }} ><div>asdsadasd</div></ResizableRect>
  }
}

export default Resizer;
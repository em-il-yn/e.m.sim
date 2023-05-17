import React, {Component} from 'react';

class Cursor extends Component {
    state = {
        left: 0,
        top: 0
    }
    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            setTimeout(() => {
                this.setState({left: e.pageX, top: e.pageY});
            }, 100); // add a 100ms delay
        });
    }
    handleMouseMove = (e) => {
        this.setState({
            left: e.pageX,
            top: e.pageY,
            isMoving: true
        });

        
    }

    handleMouseStop = () => {
        this.setState({isMoving: false});
    }

    render() {
        const {left, top, isMoving} = this.state;
        const scale = isMoving ? 1.5 : 1; // scale cursor when moving

        return (
            <div
                style={{
                    left,
                    top,
                    transform: `translate(-15px, -15px) scale(${scale})`,
                }}
                className='cursor'
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseStop}
                onMouseUp={this.handleMouseStop}
                onMouseDown={this.handleMouseMove}
            ></div>
        )
    }
}

export default Cursor;
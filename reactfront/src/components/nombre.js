import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHungry: true,
      topping: 'Pepperoni',
      slices: 8,
    };
    this.eatSlice = this.eatSlice.bind(this);
    this.buySlice = this.buySlice.bind(this);
  }

  eatSlice() {
    const totalSlices = this.state.slices - 1;
    this.setState({
      slices: totalSlices,
    });
  }

  buySlice() {
    const totalSlices = this.state.slices + 1;
    this.setState({
      slices: totalSlices,
    });
  }

  render() {
    return (
      <div>
        <Button action={this.eatSlice} label='Eat a slice' />
      </div>
    );
  }
}
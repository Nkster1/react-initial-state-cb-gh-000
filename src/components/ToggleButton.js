// Component Code Goes Here
import React from "react";

class ToggleButton extends React.Component {
  constructor () {
    super();

    this.state = {
      isEnabled: false;
    }
  }

  render () {
    return (
      <Button className="toggle-button">
      I am toggeled {this.state.isEnabled ? "on" : "off"}
      </Button>
    )
  }
}

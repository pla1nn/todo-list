import { Component } from "react";
import { Button, DropdownMenu, DropdownContainer } from "./Dropdown.styled";

export class Dropdown extends Component {
  state = {
    visible: false
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
        visible: !prevState.visible
    }));
  };

  render() {
    return (
      <DropdownContainer>
        <Button onClick={this.toggleMenu}>
            {
                this.state.visible ? 'hide' : 'show'
            }
        </Button>

        {this.state.visible && <DropdownMenu>menu</DropdownMenu>}
      </DropdownContainer>
    );
  }
}

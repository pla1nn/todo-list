import { Component } from "react";
import { Button, DropdownMenu, DropdownContainer } from "./Dropdown.styled";

export class Dropdown extends Component {
    render() {
        return (
            <DropdownContainer>
                <Button>Show</Button>
                <DropdownMenu>
                    menu
                </DropdownMenu>
            </DropdownContainer>
        )
    }
}
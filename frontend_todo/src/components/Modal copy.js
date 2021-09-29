import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ativeItem: this.props.activeItem
        };
    }

    handleChange = e => {
        let { name, value} = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = {...this.state.activeItem, [name]: value}
        this.setState({activeItem});
    };
    render() {
        const {toggle, onSave} = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Task Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="title">Title </Label>
                            <Input
                                type="text"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Task Title"
                                />

                        </FormGroup>
                        <FormGroup>
                            <Label for="title">detail </Label>
                            <Input
                                type="text"
                                name="detail"
                                value={this.state.activeItem.detail}
                                onChange={this.handleChange}
                                placeholder="Enter Task Detail"
                                />

                        </FormGroup>
                        <FormGroup>
                            <Label for="Done">
                            <Input
                                type="checkbox"
                                name="done"
                                value={this.state.activeItem.done}
                                onChange={this.handleChange}
                                
                                />
                                done
                                </Label>

                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        </Button>
                </ModalFooter>
            </Modal>
        )
    }
}

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import AddTweet from './AddTweet';

export default ({ addTweet, close, showModal }) => {
    return (
        <Modal show={ showModal } onHide={ () => close() }>
            <Modal.Header closeButton>
                <Modal.Title>Compose New Tweet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddTweet addTweet={ addTweet } />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

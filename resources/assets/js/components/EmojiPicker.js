import React from 'react';
import EmojiPicker from 'react-emoji-picker';

const emojiPickerStyles = {
    backgroundColor: 'white',
    border: '1px solid #0074d9',
    borderTop: 'none',
    left: 0,
    position: 'absolute',
    padding: '5px 10px',
    top: '53px',
    width: '100%',
    zIndex: '2'
};

const emojiIconStyles = {
    position: 'absolute',
    right: '20px',
    top: '22px'
};

class ChatEmojiPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showEmojiPicker: false
        }
    }

    setEmoji(emoji) {
        this.props.onEmojiSelect(emoji);

        this.setState({
            showEmojiPicker: false
        });
    }

    toggleEmojiPicker() {
        this.setState({
            showEmojiPicker: ! this.state.showEmojiPicker
        });
    }

    renderEmojiPicker() {
        if (this.state.showEmojiPicker) {
            return (
                <EmojiPicker style={emojiPickerStyles}
                             onSelect={ emoji => this.setEmoji(emoji) }
                             query={this.state.emoji}
                />
            )
        }
    }

    render() {
        return (
            <div>
                <i className="ion-happy-outline" style={ emojiIconStyles } onClick={ () => this.toggleEmojiPicker() }/>
                { this.renderEmojiPicker() }
            </div>
        );
    }
}

export default ChatEmojiPicker;

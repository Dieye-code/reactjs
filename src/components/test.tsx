import React, { Component } from "react";

export default class Test extends Component {

    emojis = [
        {
            emoji: '😀',
            name: "test grinning face"
        },
        {
            emoji: '🎉',
            name: "party popper"
        },
        {
            emoji: '💃',
            name: "woman dancing"
        }
    ];

    render() {
        return (
            <h2>
                Salut
            </h2>
        );
    }
}
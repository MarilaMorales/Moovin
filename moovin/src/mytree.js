import React, { Component } from 'react';
import OrgChart from "../orgchart";


export default class Tree extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.chart = new OrgChart (this.divRef.current , {
            nodes: this.props.nodes,

            nodeBinding: {
                field_0: 'name',
                img_0: 'img'
            }
        });
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}


import React, {Component} from "react"
import mermaid from "mermaid"

class Mermaid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            svg: null,
        }

        mermaid.mermaidAPI.initialize({
            startOnLoad: false,
            theme: 'default',
            themeCSS: '.node rect { fill: red; }',
        })
    }

    componentDidMount() {
        mermaid.mermaidAPI.render(this.props.id, this.props.content, svg => {
            this.setState({svg})
        })
    }

    render() {
        if (!this.state.svg) {
            return <div>Loading...</div>
        }

        return <div className={"mermaid"} dangerouslySetInnerHTML={{__html: this.state.svg}}/>
    }
}

export default Mermaid


import React, { Component } from 'react';
import Map from './import'


class WithoutSplitting extends Component {


    getAllTstComponents() {
        const { start, end } = this.props
        const TestComponents = []
        console.log(start, end)
        for (let i = start; i <= end; i++) {
            let Component = Map[i]
            TestComponents.push(<Component key={i} />);
        }
        return TestComponents
    }

    render() {
        return (
            <div>
                {this.getAllTstComponents()}
            </div>
        );
    }
}
export default WithoutSplitting
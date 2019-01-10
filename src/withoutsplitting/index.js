import React, { Component } from 'react';
import Map from './import'


class WithoutSplitting extends Component {


    getAllTstComponents() {
        const TestComponents = []
        for (let i = 1; i <= Object.keys(Map).length; i++) {
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
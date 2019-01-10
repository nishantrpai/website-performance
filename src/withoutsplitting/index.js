import React, { Component } from 'react';

import TestComponent1 from '../components/TestComponent1'

const Map = {
    1: TestComponent1
}


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
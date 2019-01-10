import React, { Suspense, Component } from 'react';
import Map from './import'


class WithLazyLoading extends Component {


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
                <Suspense fallback={<p>Loading...</p>}>
                    <div>
                        {this.getAllTstComponents()}
                    </div>
                </Suspense>
            </div>
        );
    }
}
export default WithLazyLoading
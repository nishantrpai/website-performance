import React, { Suspense, Component } from 'react';
import Map from './import'


class WithLazyLoading extends Component {


    getAllTstComponents() {
        const { start, end } = this.props
        const TestComponents = []
        for (let i = start; i <= end; i++) {
            console.log(i, end,Map[i])
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
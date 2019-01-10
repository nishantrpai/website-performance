import React, { Suspense, Component, lazy } from 'react';


const TestComponent1 = lazy(() => import('../components/TestComponent1'));



const Map = {
    1: TestComponent1
}


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
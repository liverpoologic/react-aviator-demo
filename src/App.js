import React from 'react';
import './App.css';
import Aviator from 'aviator';
import FrameA from './frameA';
import FrameB from './frameB';

function App() {
    return (
        <div className="App">
            <div>Hello</div>
        </div>
    );
}

var FrameARouteTarget = {
    hi: function() {
        var ret = <FrameA text="hi" />;
        console.log('in hi');
        React.renderComponent(ret, document.getElementById('App'));
    },
    b: function() {
        console.log('in b');
        return <FrameA text="b" />;
    }
};

Aviator.setRoutes({
    '/framea': {
        target: FrameARouteTarget,
        '/hi': 'hi',
        '/b': 'b'
    }
});

Aviator.dispatch();
export default App;

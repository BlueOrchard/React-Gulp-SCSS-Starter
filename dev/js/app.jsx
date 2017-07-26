import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component{
    render(){
        return <div>
                    {this.props.children}
               </div>;
    }
}

ReactDOM.render(<Layout>
                    Test Component
                </Layout>, document.getElementById('app'));
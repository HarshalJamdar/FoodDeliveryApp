import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 1,
        }

        console.log('constructor');
    };

    componentDidMount(){
        console.log('componentDidMount');
    }

    render() {
        const { name, location} = this.props;
        const { count, count2 } = this.state;

        console.log('render');

        return (
        <div className='user-card'>
           <h1>Count:{count}</h1>
           <button onClick={() =>{
            this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1,
            })
           }}>Count Increase</button>
           <h2>Name: {name}</h2> 
           <h3>Location: {location}</h3>
           <h4>Contact: jamdarharshal@gmail.com</h4>
        </div> 
        );
    }
}

export default UserClass;


// Life Cycle of Class Based Component

// First Constructor is called then Render is called then componentDidMount is called.

// If we have both Parent and Child component, 1st parent's constructor is called then parent's render is called, then child's constructor is called then child's render is called then child's componentDidMount is called and then parent's componentDidMount is called.

// Important: First child's componentDidMount is called and then parent's componentDidMount is called.

//componentDidMount is used to make API calls.

//Incase of multiple children:

/*
Render Phase: All this happens in virtual DOM
- parent constructor
- parent render
    - child1 constructor
    - child1 render

    - child2 constructor
    - child2 render

Commit Phase: This is done in actual DOM
    - child1 componentDidMount
    - child2 componentDidMount
- parent componentDidMount
*/

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
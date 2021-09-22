
Logical Component ( Stateful component )
do logic 
state 
Lifecycle Methods
  call back functions
  mounting
    rendering a component a page
class 


Presentational Component ( stateless component )
displaying onto the screen  
const






Lifecycle Methods
Callbacks functions
Mounting
  - rendering a component / Mounting
Props change
State change






Initialization:  (Component is rendered for the first time)
  *componentWillMount()
  render()
  componentDidMount()

State changes:  (State changes can cause lifecycle hooks to run)
  shouldComponentUpdate()
  *componentWillUpdate()
  render()
  componentDidUpdate()

Props changes: (A component receiving new props will trigger lifecycle hooks)
  *componentWillReceiveProps()
  shouldComponentUpdate()
  *componentWillUpdate()
  render()
  componentDidUpdate()

Unmounting
  componentWillUnMount() 

  componentDidMount() {
    this.setState({ todos: ['eat breakfast']})
  }

  componentDidMount() {
    // grab the todos db
    this.setState({ todos: [...db] })
  }


Gone in React 17:
  componentWillMount
  componentWillRecieveProps
  componentWillUpdate


New in React 17: 
  UNSAFE_componentWillMount
  UNSAFE_componentWillRecieveProps
  UNSAFE_componentWillUpdate
  getDerivedStateFromProps
  getSnapshotBeforeUpdate


HOC 
Higher ordered component

State - storage { users: [], firstName: '' }
JS Object we can store properties in
Component Storage
When a value changes in state, render is called


Props 
Properties passed down parent to child
One way 
Read only 

// prop drilling 

/*                 Contact List Structure

                        Index (styles)
                          |
                         App (addC) (contacts) (remove)  (updateContact)
                         /  \         
         (addC) ContactForm   Contacts List (contacts)  (remove)  (updateContact)  
                               |
                              Contact (remove) X 3 (updateContact)
                                |
                              ContactForm (updateContact)
                                

*/



Logical Component ( Stateful component )
  do logic 
  state 
  lifecycle Methods
  class 

  // class extends Component {
  //   state = { }

  //   componentDidMount() {

  //   }

  //   render () {
  //     return (

  //     )
  //   }
  // }

Presentational Component ( stateful component )
  displaying onto the screen  
  logic
  state
  lifecycle methods
  const

  // function Home () => {

  // }
  const Home = ({}) => (
    
  )

  const Home = ({}) => {
    return (

    )
  }

















// state has to be an object 
// state = { theme: 'blue' }









// What is a Hook?
//  - Hooks are functions that let you "hook into" React 
// state and lifecycle features from function components.
//  - Hooks don't work inside classes 
//    - they let you use React without classes
//  - Hooks are a way to reuse stateful logic, 
//     not state itself









// Why Hooks?
//   - native to react
//   - already out! V 16.8
//   - Hooks allow you to reuse stateful logic without 
//     changing your component hierarchy
//   - Hooks let you split one component into smaller 
//     functions based on what pieces are related 
//   - Hooks let you use more of React's features without classes
//     classes don't minify very well, 
//     and they make hot reloading flaky and unreliable






// When would I use a Hook ? 
//   - If you write a function component and realize you need to 
//     add some state to it, previously you had to convert it to 
//     a class.
//     Now you can use a Hook inside the existing function component.

// logical and presentational
//   presentational
//     hooks


// display 
const Page = () => (
  adfadf
)

// logical features
const Page = () => {
  const toggleClock = () => {

  }
  
  return(
    adfadf
  )
}



Hooks


Different Types of Hooks

  State Hooks

    import { useState, } from 'react';

    const Example = () => {
      
      // Declare a new state variable, which we'll call "count"
        // state = { count: 0 }
      const [count, setCount] = useState(0);
      // this.setState({ count: })

      // const setCount = () => {

      // }

      return (
        <div>
          {/* this.state.count */}
          <p>You clicked {count} times</p>
          <h1>{count}</h1>
                    {/* // this.setState({ count: this.state.count + 1}) */}
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }

  // useState 
  //   returns an array of two items:
  //     - the current state value 
  //       count
              const [count, setCount] = useState(0);

              var countStateVariable = useState(0); // Returns a pair
              var count = countStateVariable[0]; // First item in a pair
              var setCount = countStateVariable[1]; // Second item in a pair
  //     - a function that lets us update it
  //       setCount
  //       this.setState


  
    // Read state
    //   new        old
    //   count      this.state.count

    // updating state  
    //   new                      old   
    //   setCount(count + 1)      this.setState({ count: this.state.count + 1 })

    // unlike this.setState in a class, updating a state variable 
    // always replaces it instead of merging it

  


Declaring multiple state variables

  - You can use the State Hook more than once in a single component.

const ExampleWithManyStates = () => {
  // Declare multiple state variables!
  // state = { age: 42, fruit: 'banana', todos: [{ text: 'learn Hooks'}]}
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }, { text: 'Learn Router' }]);
  // ...
  
  setTodos([...todos, newTodo ])
  return(
    <Item age={age} setAge={setAge}/>
  )
}



Effect Hook
  // data fetching
  // subscriptions
  // manpulating DOM 

  // side effects - affect other components and can't be done in render

// It serves the same purpose as componentDidMount, componentDidUpdate, 
// and componentWillUnmount in React classes
  
  import React, { useState, useEffect, } from 'react';

  const Example = () => {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    }, []);

    const update = () => {
      
    }

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  // - Effects are declared inside the component so they have 
  //   access to its props and state.
  // - By default, React runs the effects after every render — 
  //   including the first render 
  //   calles a re render

  // think that effects happen "after render"
  // useEffect is going to be different on every render.
  // Every time we re - render, we schedule a different effect, 
  //  replacing the previous one




  import React, { useState, useEffect } from 'react';

  function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    useEffect(() => {
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });

    if (isOnline === null) {
      return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
  }

// optionally specify how to "clean up" after them by 
// returning a function.
// For example, this component uses an effect to subscribe to 
// a friend's 
// online status, and cleans up by unsubscribing from it


Context Hook

  // - to subscribe our functional component to React context 
  // without introducing nesting:

  const Example = () => {
    const locale = useContext(LocaleContext);
    const theme = useContext(ThemeContext);
    // ...

    // theme.state.todos
    // theme.getTodos()

    // <ThemeContext.Consumer>

    // </ThemeContext.Consumer>
  }




Flux Hooks

  // lets you manage local state of complex components with a reducer
  function Todos() {
    const [todos, dispatch] = useReducer(todosReducer);
    // ...


function callHook() {
  
}


// Rules of Hooks
//   Hooks are JavaScript functions, but they impose two additional rules:

//     Only call Hooks at the top level. 
//     Don't call Hooks inside loops, conditions, or nested functions.
//     Only call Hooks from React function(presentational) components.
//     Don't call Hooks from regular JavaScript functions.

https://reactjs.org/docs/hooks-intro.html
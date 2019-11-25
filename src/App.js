import React,{Suspense}  from "react";
import Typing from "react-typing-animation";
// import logo from './logo.svg';
import "./App.css";

// import { add } from './math.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Typing>
        <h2>
          React Js Day 1 Play ground
          <Typing.Backspace count={13} />
          <Typing.Delay ms={2000} />2 Play ground
        </h2>
      </Typing>
      {/* example 1 */}
      {/* <Toggle /> */}

      {/* example 2 */}
      {/* <ParentSharesToChild/> */}

      {/* example 2.1 */}
      {/* <ChildToParent/> */}

      {/* exmaple 2.2 */}
      {/* <UserProvider>
        <UserMessage />
        <UserSettings />
      </UserProvider> */}

      {/* exmaple 3.1 -  code splitting :  bundling */}
      {/* <h2>Calc: {add(16, 26)}</h2> */}

    </div>
  );
}


// example 2.2 -- react context api

// const UserContext = React.createContext({
//   username: "",
//   updateUsername: () => {}
// });

// export class UserProvider extends React.Component {
//   updateUsername = newUsername => {
//     this.setState({ username: newUsername });
//   };

//   state = {
//     username: "user name",
//     updateUsername: this.updateUsername
//   };

//   render() {
//     return (
//       <UserContext.Provider value={this.state}>
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }

// export class SomeElement extends React.Component {
//   render() {
//     return (
//       <UserContext.Consumer>
//          {({ username }) => <h2> In some other element: {username}!</h2>}
//       </UserContext.Consumer>
//     );
//   }
// }

// function UserMessage() {
//   return (
//     <UserContext.Consumer>
//       {({ username }) => <h1>Welcome {username}!</h1>}
//     </UserContext.Consumer>
//   );
// }

// function UserSettings() {
//   return (
//     <UserContext.Consumer>
//       {({ updateUsername }) => (
//         <div>
//           <h2>Settings</h2>
//           <label htmlFor="username">Username: </label>
//           <input
//             id="username"
//             type="text"
//             onChange={event => {
//               updateUsername(event.target.value);
//             }}
//           />
//         </div>
//       )}
//     </UserContext.Consumer>
//   );
// }

// example 2.1 -- passing data to parent

// class ChildToParent extends React.Component {
//   state = { message: "" }
//   callbackFunction = (childData) => {
//         this.setState({message: childData})
//   }
//   render() {
//           return (
//               <div>
//                    <ChildComponent parentCallback = {this.callbackFunction}/>
//                    <p> {this.state.message} </p>
//               </div>
//           );
//   }
//   }

//   class ChildComponent extends React.Component{
//       constructor(props) {
//     super(props);

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.sendData();
//   }
//     sendData = () => {
//              this.props.parentCallback("Hey Popsie, How’s it going?");
//         }
//     render() {
//     //you can call function sendData whenever you'd like to send data from child component to Parent component.
//        return(
//          <button onClick={this.handleClick}>Click me to talk to parent</button>
//       )
//         }
//     };

// example 2 -- Passing data to child

// class ParentSharesToChild extends React.Component {
//   state = { data : "This is parents data" }
//   render() {

//           return (
//               <div>
//                   {/* child with no data to send              */}
//                    <ChildComponent/>

//                    <ChildComponent dataFromParent = {this.state.data} />
//               </div>
//           );
//       }
//   }

//   class ChildComponent extends React.Component{
//     render() {

//       return (
//           <div>
//              {this.props.dataFromParent ? 'The data from parent is: '+ this.props.dataFromParent : 'No data from parent'}
//           </div>
//       );
//   }
// }

// example 1.1

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true, value: "empty" };

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(Value) {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn,
//       value: Value
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h2>
//           {/* <button onClick={this.handleClick.bind(this,"I got a click!")}> */}
//           <button
//             onClick={this.handleClick.bind(
//               this,
//               this.state.isToggleOn ? "I got a click!" : "Click me again"
//             )}
//           >
//             {this.state.isToggleOn
//               ? "ON " + this.state.value
//               : "OFF " + this.state.value}
//           </button>
//         </h2>
//       </div>
//     );
//   }
// }

// exmaple 1

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h2>
//           <button onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'ON' : 'OFF'}
//           </button>
//       </h2>
//       </div>
//     );
//   }
// }

export default App;

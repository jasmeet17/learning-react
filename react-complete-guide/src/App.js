import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
//for hooks
// import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharCompoenent/CharComponent';

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons : [
//       { name: 'Max1', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephine', age: 26},
//     ],
//     otherState: 'Other state Value'
//   });

//   const switchNameHandler = () => {
//     // Dont do mutate/change state directly. REACT wont recgnize
//     // this.state.persons[0] = 'Maxmilian'
//     setPersonsState({
//       persons: [
//         { name: 'MaxMialn', age: 28},
//         { name: 'Manu', age: 29},
//         { name: 'Stephine', age: 28},
//       ]})
//   };

//   return (
//     <div className="App">
//       <h1>Hi! I'm a React App</h1>
//       <p>This is really working too!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Racing is My hobbies</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//       <Person />
//     </div>
//   );
  
// }

// export default app;

// States are managed from inside of the component
// where as props are entered from outside the component


class App extends Component {

  // rserved keyword
  state = {
    persons : [
      { id: 'q1', name: 'Max1', age: 28},
      { id: 'q2', name: 'Manu', age: 29},
      { id: 'q3',  name: 'Stephine', age: 26},
    ],
    otherState: 'Other state Value',
    showPersons: false
  }

  switchNameHandler = (nameName, showPerson) => {
    // Dont do mutate/change state directly. REACT wont recgnize
    // this.state.persons[0] = 'Maxmilian'
    this.setState({
      persons: [
        { name: nameName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephine', age: 28},
      ],
      showPersons: showPerson,
      inputText: null
    })
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    });

    const person ={
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =  [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletPersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)

    this.setState({persons: persons})
  }

  textChangeHandler = (event) => {
    console.log(event.target.value)
    this.setState({inputText: event.target.value})
  }

  deleteCharHandler = (index) =>{
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const updatedText =  text.join('');
    this.setState({inputText: updatedText})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if (!this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return(
                <Person 
                click={() => this.deletPersonHandler(index)}
                name={person.name}
                age={person.age} 
                key={person.id}
                changed={(event)=> this.nameChangeHandler(event, person.id)}/>
              )
            })
          }
          
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let validComponent = null;
    let charComponent = null;
    if(this.state.inputText!==undefined){
      
      validComponent = (
        <div>
          <ValidationComponent textValue={this.state.inputText}/>
        </div>
        
      )
      
      const chars = [...this.state.inputText];
      charComponent = (
        <div>
          {
            chars.map((value, index) =>{
              return(
                <CharComponent 
                textValue={value} 
                key={index}
                clicked={() => this.deleteCharHandler(index)}/>
              )
            })          
          }
        </div>
      )

    }

    let classes = []

    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
 
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <input type="text" placeholder="For assignment" onChange={(event)=> this.textChangeHandler(event)}/>
        {/* <ValidationComponent textValue={this.state.inputText}/> */}
        {validComponent}
        {charComponent}
        <p className={classes.join(' ')}>This is really working too!</p>
        {/* Prefrred way is BIND as it is efficient */}
        <button  onClick={this.switchNameHandler.bind(this, "MAXXXX")}>Switch Name</button>
        <button onClick= { () => this.switchNameHandler("ZZZZ")}>Switch 2nd way Name</button>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Paragraph</button>
        
        {/* More Elegant way of conditional */}
        {persons}

        {/* Less Elegant way of conditional */}
        { 
        this.state.showPersons===true ?
        <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "JJJJ")}
          />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}>Racing is My hobbies</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
          <Person />
        </div> : null
        }
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I\'m a React App2'))
  }
}

export default App;
// export default Radium(App);
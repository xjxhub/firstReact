import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
      persons:[
          {id:1,name:'aaa'},
          {id:2,name:'bbb'},
          {id:3,name:'vvv'},
      ],
      otherState:'anything',
      showPersons:false
  }

  switchNameHandler=(newName)=>{
      // console.log("hello")
      this.setState({
          persons:[
              {name:newName},
              {name:'bbb'},
              {name:'vvv'},
          ]
      })
  }

  namechangedHandle=(event,id)=>{
      const personIndex = this.state.persons.findIndex(p =>{
          return p.id === id
      })

      const person = {
          ...this.state.persons[personIndex]
      }

      person.name = event.target.value

      const persons = [...this.state.persons]

      persons[personIndex] = person

      this.setState({
          persons:persons
      })
      // console.log(event)
  }

  togglePersons = () =>{
      const doesShow = this.state.showPersons
      // this.setState({showPersons:!doesShow})
      if (doesShow) {
          this.setState({showPersons:false})
      } else {
          this.setState({showPersons:true})
      }
  }

  delete = (personIndex) => {
      // 操作运算符
      const persons = [...this.state.persons]
      persons.splice(personIndex,1)
      this.setState({
          persons:persons
      })

  }

  render() {
    const style = {
      backgroundColor:'#fff',
      border:'1px solid blue'
    }

    let persons = null
    if (this.state.showPersons) {
        persons= (
            <div>
                {
                    this.state.persons.map((person,index) => {
                        return <Person
                                changed={(event) => this.namechangedHandle(event,person.id)}
                                myclick={() => this.delete(index)}
                                key={index}
                                name={person.name}/>
                    })
                }
                {/*<Person changed={this.namechangedHandle} name={this.state.persons[0].name}/>*/}
                {/*<Person myclick={this.switchNameHandler.bind(this,'xjx')} name='2'/>*/}
                {/*<Person changed={this.namechangedHandle} name='3'>aaaaa</Person>*/}
                {/*<Person name='4'>xjx</Person>*/}
            </div>
        )

    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reactwowowo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={style} onClick={this.switchNameHandler.bind(this,'missu')}>更改</button>
        <button onClick={this.togglePersons}>内容切换</button>
        {persons}
        {/*{ this.state.showPersons ?*/}
          {/*<div>*/}
            {/*<Person changed={this.namechangedHandle} name={this.state.persons[0].name}/>*/}
            {/*<Person myclick={this.switchNameHandler.bind(this,'xjx')} name='2'/>*/}
            {/*<Person changed={this.namechangedHandle} name='3'>aaaaa</Person>*/}
            {/*<Person name='4'>xjx</Person>*/}
          {/*</div> : null*/}
        {/*}*/}

      </div>
    );
  }
}

export default App;

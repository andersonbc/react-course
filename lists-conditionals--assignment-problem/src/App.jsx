import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

    state = {
        text: '',
    }

    textChangeHandler = (event) => {
        this.setState({
            text: event.target.value,
        });
    }

    deleteCharHandler = (index) => {
        let remove = this.state.text.split('');
        remove.splice(index, 1);
        const updatedText = remove.join('');
        this.setState({
            text: updatedText
        })
    }

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.textChangeHandler} />
                <Validation length={this.state.text.length} />
                {
                    this.state.text.split('').map((letter, index) =>
                        <Char key={index} letter={letter} clicked={() => this.deleteCharHandler(index)}/>
                    )
                }

                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
            </div>
        );
    }
}

export default App;

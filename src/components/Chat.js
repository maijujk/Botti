import React, {Component} from 'react'
import "bulma/css/bulma.min.css";
import '../styles/Chat.css';
import logo from "../styles/botti.png";

class Chat extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: props.uname,
        msg: '',
        messages: []        
      };
      this.changeMsg = this.changeMsg.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.logout = props.logout
    }
    
    newMessage(name, text, random) {
      const ane = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
        ]
        var next = ane[Math.floor(Math.random() * ane.length)];
        const bot = "Botti"
        let t = new Date()
        let tstamp = `${t.getDate()}.${t.getMonth()+1}.${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
        this.setState({
            messages: [...this.state.messages, 
                {name: name, text: text, time: tstamp, random: next, botti: bot}],
            msg: ''
        })
    }

    displayMessages() {
        return this.state.messages.map((msg, index) => 
            <div key={`msg-${index}`} className="box grey"> 
              <p className="block txt-wrap txt">{msg.text}</p>
              <p style={{textAlign: 'right'}} className="block txt-wrap size dark">{msg.name} 
              <p style={{textAlign: 'right'}} >{msg.time}</p></p>
            
            <div className="box"> 
              <p className="block txt-wrap txt">"{msg.random}"</p>
              <p style={{textAlign: 'right'}} className="block txt-wrap size dark">{msg.botti} 
              <p style={{textAlign: 'right'}}>{msg.time}</p></p>
            </div></div>
        )
    }
    
    changeMsg(event){
      this.setState({
        msg:event.target.value
      })
    }

    onSubmit(event){
      event.preventDefault()
      this.newMessage(this.state.username, this.state.msg)
    }
    
    render() {
       return (
        <div className="container chat-bg">
          <div className="panel">
            <form className="form-pad" onSubmit={this.onSubmit}>
              <div className="field">
                <p align="right"> 
                  <button className="button is-dark is-rounded" 
                   onClick={this.logout} 
                    value="LogOut">Log out
                  </button> </p>
                  <br></br>
                <p align="middle">  
                  <p className="panel-heading panel-bg white">Hello {this.state.username}, talk to the Botti!</p>
                  <img src={logo} alt="botti" className="logo"/>
                </p>

                <div className="field">                  
                  {this.displayMessages()}
                </div>

                <div className="field is-grouped">
                  <textarea className="input" 
                    type="text" 
                    placeholder="Write here" 
                    onChange={this.changeMsg} 
                    value={this.state.msg}
                    minLength="1" maxLength="500" required> 
                  </textarea>
                  <div className="control">
                    <button className="button is-dark" value="Submit">
                    +
                    </button> 
                  </div>
                </div>      
              </div>    
            </form>
          </div> 
        </div>
      );
    }
  }

export default Chat;
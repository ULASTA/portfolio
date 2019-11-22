import React, {Component} from 'react'
import Typical from 'react-typical'
import './demo.css'

const steps = [
    'Hello 👋 About me and this website...', 2000,
    'This is the website from me, ULAS', 800,
    'I am a Java Developer', 800,
    'I am learning JPA/Hibernate', 500,
    'and web components', 4000,
    'These are written by using ', 3000,
    'the react-texty library', 1000,
    'and react-parallax', 1000,
    'To be continued.........',20000
];

class Demo extends React.Component {
    render() {
        return (
            <div>
                <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'}/>
            </div>
        )
    }
}


export default Demo
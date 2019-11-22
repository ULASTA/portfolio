import React from 'react';
import './App.css';
import { Parallax, Background } from 'react-parallax';
import  Demo from "./Demo";

const MyComponent = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax

            blur={0}
            bgImage={require('./photos/photo.jpg')}
            bgImageAlt="the photo"
            strength={200}
        >


            <div id={'welcometext'}><p style={{position:'relative'}}>Hello Parallax React Example<br/>by Ulas - Java Developer</p></div>
                <div style={{ height: '2000px' }} />
        </Parallax>

        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 10 }}
            bgImage={require('./photos/astronomy.jpg')}
            bgImageAlt="the landscape"
            strength={5000}
        >

            <div style={{height: '400px', width:'150%'} } />
        </Parallax>

        {/* -----custom background element-----*/}
        <Parallax strength={1000}>
            <div></div>
            <Background className="custom-bg" z-index='50'>
                <p>HELLO FROM BACKGROUND</p>
                <img src="/src/photos/assorted-color-balls.jpg" alt={"photos"}/>
            </Background>
        </Parallax>

        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
            bgImage={'/src/photos/assorted-color-balls.jpg'}
            strength={800}
            renderLayer={percentage => (
                <div
                    style={{

                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '8%',
                        top: '50%',
                        width: percentage * 2000,
                        height: percentage * 1000,
                    }}
                />
            )}
        >

            <div id={'content'}/>
            <p/>...............................................
            <p/> WELCOME TO PARALLAX SCROLLING BY USING REACT CODE
            <br/>
            <p/>This is an example of parallax scrolling
            <p/> and text animation by using react js.
            <p/>These are the links for react-texty an react-parallex
            <p id="priv"/>https://www.npmjs.com/package/react-parallax/v/2.2.4
                        {/*https://github.com/catalinmiron/react-typical*/}

            <p/>the orange rectangle will enlarge as you scroll down
            {/*<p/><a href={'https://www.npmjs.com/package/react-parallax/v/2.2.4'}/>*/}
            {/*<p/><a href={'https://github.com/catalinmiron/react-typical'}/>*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p/>Check the text looping indefinitely with animation
            <br/>
            <br/>

        </Parallax>

        <Demo/>
    </div>
);



export default MyComponent;
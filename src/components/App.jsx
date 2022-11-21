import React from "react";
import Header from "./header";
import Section from "./section";
import './styles.css'

function App(){
    return(
        <div>
            <Header/>
           
            <div class="row">
            <h1 className="HeaderName p-3" >Action</h1>
            <Section img="https://img.zorores.com/_r/300x400/100/de/bf/debf027d032c6d40b91fab16b2ff9bd4/debf027d032c6d40b91fab16b2ff9bd4.jpg"/>
            
            <Section img="https://img.zorores.com/_r/300x400/100/99/3c/993c0361975cce4c7fbb11f8558f9664/993c0361975cce4c7fbb11f8558f9664.jpg"/>
            
            <Section img="https://img.zorores.com/_r/300x400/100/30/df/30df93feaa422101659e14d0a2a2f582/30df93feaa422101659e14d0a2a2f582.jpg"/>
            
            <Section img="https://img.zorores.com/_r/300x400/100/82/40/82402f796b7d84d7071ab1e03ff7747a/82402f796b7d84d7071ab1e03ff7747a.jpg"/>
            </div>
        </div>
    )
}
export default App;
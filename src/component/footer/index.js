import React from 'react';
import './styles.scss';
import { AiFillFacebook } from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";

function footer() {
  return (
      <>
    <div className="App">
        <div className="wrapper">
            <div className="footercontainer">
                <div className="footersecjio">
                    <div>
                    <p>Jioglass</p>
                    <p>product</p>
                    </div>
                    <div><p>for consumer</p>
                    <p>consumer experiences</p></div>
                    <div>
                    <p>for enterprises</p>
                    <p>enterprices experineces</p>
                    </div>
                </div>
                <div className="footersecdev">
                    <div>
                        <p>For developer</p>
                        <p>why to develop ?</p>
                        <p>how to develop</p>
                        <p>sign up</p>
                        <p>community</p>
                        <p>doenloads</p>
                    </div>
                    <div>
                        <p>career</p>
                        <p>opportunity</p>
                    </div>
                </div>
                <div className="footerseccontact">
                    <p>contact</p>
                    <p>
                    <address>
                    Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.
                    Visit us at:
                    Example.com
                    Box 564, Disneyland
                    USA
                    </address>
                    </p>
                    <p><a href="mailto:info@tessract.com">info@tessract.com</a></p>
                    <div>
                        <p>follow us</p>
                        <p><AiFillFacebook  size="20px" style={{paddingtop:'0px',color:'white'}}/>
                        <AiOutlineLinkedin  size="20px" style={{paddingtop:'0px',color:'white'}}/>
                        <AiOutlineInstagram  size="20px" style={{paddingtop:'0px',color:'white'}}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default footer;

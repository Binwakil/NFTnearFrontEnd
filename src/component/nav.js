import React, {useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import logo from "./../image/logo.jpg";

import  "./../css/nav.css";

import { isLogging, logout, login } from "./../near/utils";





export let Nav = () => {

   

    let showRef = useRef(null);


    // function for showing side bar for small device ????????????????

    let showSideBar = () => {

        let sidebar = showRef.current;
        
        sidebar.classList.toggle('show_hight');

        console.log(sidebar);
    }


    // function for login 

    let userlogin = () => {

        login()
    }



    // function for user logout

    let userlogout = () => {

        logout()
    }


 


    if (!isLogging()) {

        return(

            <section>

            <div id="nav_container">
                <nav id="nav">

                        <div id="logo">

                            <div>
                                <img src={logo} alt=""  />
                                <h2>WaleSea</h2>

                            </div>
                        </div>


                        <div>

                            <div id="link_container">
                                <ul>
                                 
                                    
                                   
                                    <li>
                                       
                                        <button onClick={() => userlogin()}>connect wallet</button> 
                                        
                                        
                                       
                                    </li>
                                </ul>
                            </div>

                            <div id="toggle">
                                <h2 onClick={() => showSideBar()}><FaBars></FaBars></h2>
                            </div>

                        </div>
                    

                </nav>

            </div>
                


        


            <div id="sidebar" className="show_hight" ref={showRef}>

                <div  id="sidebar_container">
                    <ul>
                        <li>
                        <button onClick={() => userlogin()}>connect wallet</button> 
                        </li>

                       

                        
                    </ul>
                </div>
            </div>
        </section>

        )
        
    }

    return(
        <section>

            <div id="nav_container">
                <nav id="nav">

                        <div id="logo">

                            <div>
                                <img src={logo} alt=""  />
                                <h2>WaleSea</h2>

                            </div>
                        </div>


                        <div>

                            <div id="link_container">
                                <ul>
                                    <li>
                                        <Link className="link" to='/'>mint</Link>
                                    </li>
                                    
                                    <li>
                                        <Link className="link" to='/view'>view</Link>
                                    </li>
                                    
                                   
                                    <li>
                                       
                                        <button onClick={() => userlogout()}>disconnect wallet</button> 
                                        
                                        
                                       
                                    </li>
                                </ul>
                            </div>

                            <div id="toggle">
                                <h2 onClick={() => showSideBar()}><FaBars></FaBars></h2>
                            </div>

                        </div>
                    

                </nav>

            </div>
                


        


            <div id="sidebar" className="show_hight" ref={showRef}>

                <div  id="sidebar_container">
                    <ul>
                        <li>
                        <button onClick={() => userlogout()}>disconnect wallet</button> 
                        </li>

                        <li>
                            <Link className="side_link" to={'/'} onClick={() => showSideBar()}>mint</Link>
                        </li>

                        <li>
                            <Link className="side_link" to={'/view'} onClick={() => showSideBar()}>view</Link>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </section>
    )
}
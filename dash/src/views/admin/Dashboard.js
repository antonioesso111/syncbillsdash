import React, { Component } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardTable from "components/Cards/CardTable.js";
import { red } from "tailwindcss/colors";
import axios from "axios";
import DatePicker from 'react-day-select';


class Dashboard extends Component{

    componentDidMount(){
      axios.get('/api/gmail/inbox/kevinliboire@gmail.com',{
        headers:{'SyncBills-Auth-Key':'a84bedaf6099355fa4e0e1f9ffd38bff','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"}
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }

  render(){
    return (
      <>
   <div className="relative flex w-full mb-3 mt-8"  style={{'z-index': '1',}}>
              <div className="w-full xl:w-4/12 mb-11 xl:mb-0 px-4">
                <DatePicker
                  bgColor='#435EBE'
                  onChange={(e) => console.log(e)}
                  format="MM-DD-YYYY"
                />
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <DatePicker
                  bgColor='#435EBE'
                  onChange={(e) => console.log(e)}
                  format="MM-DD-YYYY"
                />

              </div>
              
              <div className="w-full xl:w-3/12 px-8">
                <button
                  className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >

                  Filter
                </button>


              </div>
            </div>
  
        <div className="flex flex-wrap mt-4">
  
          <div className="w-full mb-12 px-4">
            <CardTable color="dark" />
  
            
          </div>
        </div>
       
  
  
  <div className="btn-wrapper text-center">
                    <button
                      className="bg-red-500 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-lg inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      {/* <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/github.svg").default}
                      /> */}
                      EDIT
                    </button>
                    <button
                      className="bg-blue active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-lg inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button" style={{ background: '#02a1db'}}
                    >
                      {/* <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/google.svg").default}
                      /> */}
                      RECIEVED
                    </button>
  
                    <button
                      className="bg-green-500 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-lg inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                      style={{ background: '#6bb241'}}
                    >
                      {/* <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/google.svg").default}
                      /> */}
                      ROUTE FOR APPROVAL
                    </button>
                    <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-lg shadow-cyan-500/50 inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                      style={{ background: '#f59e0b'}}
                    >
                      {/* <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/google.svg").default}
                      /> */}
                      SYNCH WITH
                    </button>
                  </div>
  
                  
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                
      </>
    );
  }
}


export default Dashboard;
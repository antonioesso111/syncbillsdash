import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import DatePicker from 'react-day-select';


export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-light blue-950 md:pt-32 pb-32 pt-12" style={{ background: '#02a1db' }}>
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Bills update"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="outlook bills"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOtal"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
            
            {/* <div className="relative flex w-full mb-3 mt-8"  style={{'z-index': '1',}}>
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
             */}
          </div>
        </div>
      </div>
    </>
  );
}

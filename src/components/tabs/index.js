import React from "react"

import './index.css'

const tabsNames = [["таба", "#"], ["таба", "#"], ["таба", "#"], ["таба", "#"], ["таба", "#"]]

var selectedIndex = 0;

const Tab = (_id, _callback) => {
    return (
        <div key={_id} className={`tabs__tab-item ${_id == selectedIndex ? "tabs__tab-item_selected" : ""}`}
        onClick={()=>{
            selectedIndex = _id;
            _callback(_id);
        }}
        data-val={_id}>
            <a href={tabsNames[_id][1]}>{tabsNames[_id][0]}</a>
        </div>
    )
}

const Tabs = () => {
    const updateTabs = (id) =>{
            document.querySelectorAll(".tabs__tab-item").forEach(element => {
                if (element.getAttribute("data-val") != id)
                    element.classList.remove("tabs__tab-item_selected");
                else
                element.classList.add("tabs__tab-item_selected");
            });
    }

    const getTabs = () => {
        let _tabs = [];
        for (let i = 0; i < tabsNames.length; i++) {
            _tabs.push(Tab(i, updateTabs));
        }
       
        return _tabs;
    }

    return (
        <div className="tabs">
            {getTabs()}
        </div>
    )

}

export default Tabs
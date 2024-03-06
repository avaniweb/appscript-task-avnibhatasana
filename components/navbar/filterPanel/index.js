import Accordion from "@/components/accordian";
import { useState } from "react";


function FilterPanel({ isMobile }) {

    const [filterData, setFilterData] = useState(
        [
            { type: 'checkbox', label: "CUSTOMISE" },
            { type: "multiSelect", label: "IDEAL FOR", options: ["Men", "Women", "Baby & KIDS"], value: [] },
            { type: "multiSelect", label: "IDEAL FOR", options: ["Men", "Women", "Baby & KIDS"], value: [] },
            { type: "multiSelect", label: "IDEAL FOR", options: ["Men", "Women", "Baby & KIDS"], value: [] },
            { type: "multiSelect", label: "IDEAL FOR", options: ["Men", "Women", "Baby & KIDS"], value: [] },
        ]
    )
    return (
        <div style={{ width: "100%" }}>

            <Accordion data={filterData} setFilterData={setFilterData} />
            {/* {
                filterData.map((filter, index) => {
                    
                    return (
                        <>
                        <div style={{padding:'5px 2px'}}>
                            {
                                filter.type === 'checkbox' ? 
                                <div style={{display:"flex"}}>
                                    <input type="checkbox" label="Vivek" />
                                    <label for="checkbox">{filter.label}</label>
                                </div>
                                 : filter.type === 'multiSelect' ? <div>
                                    <label for="checkbox">{filter.label}</label>


                                 </div> : null
                            }
                        </div>
                        <hr />
                        </>
    
                    )
                })
            } */}
        </div>
    )
}

export default FilterPanel;
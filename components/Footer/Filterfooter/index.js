import Accordion from "@/components/accordian";
import { useState } from "react";


function FilterPanel({ isMobile }) {

    const [filterFooterData, setFilterFooterData] = useState(
        [
            { label: "mettā muse" },
            { type: "multiSelect", label: "IDEAL FOR", options: ["About Us", "Stories", "Artisans","Boutiques" , "Contact Us","EU Compliances Docs"], value: [] }
           
        ]
    )
    return (
        <div style={{ width: "100%" }}>

            <Accordion data={filterFooterData} setFilterData={setFilterFooterData} />
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
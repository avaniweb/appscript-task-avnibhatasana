
import { useState } from 'react';
import MultiSelectDropdown from '../multiSelect';
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci';

const Accordion = ({ data, setFilterData }) => {
  const [activeIndex, setActiveIndex] = useState(null);


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">

      {data.map((item, index) => {
        return (

          <div style={{ width: "100%", padding: '10px 0px' }}>
            {
              item.type === 'checkbox' ? <div style={{ display: "flex" }}>
                <input type="checkbox" label="Vivek" />
                <p style={{ margin: 0, marginLeft: 10, fontWeight: 600 }}>
                  {item.label}
                </p>
              </div> :
                <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                  <div style={{ width: "100%", paddingRight: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }} className="accordion-title" onClick={() => toggleAccordion(index)}>
                    <p style={{ margin: 0, fontWeight: 600 }}>
                      {item.label}
                    </p>
                    {
                      activeIndex == index ?
                        <CiCircleChevUp style={{ fontSize: 20 }} />

                        :
                        <CiCircleChevDown style={{ fontSize: 20 }} />

                    }
                  </div>
                  <p style={{ margin: 0, marginTop: 5, fontSize: 14 }}>
                    {item.value.join(',')}
                  </p>
                  <div className="accordion-content">
                    {
                      item.type === 'multiSelect' &&
                      <MultiSelectDropdown index={index} setFilterData={setFilterData} data={data} options={item.options} />

                    }
                  </div>
                </div>
            }
            <hr />

          </div>

        )

      })}
    </div>
  );
};

export default Accordion;

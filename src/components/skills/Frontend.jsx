import React from "react";
import { Icon } from '@iconify/react';

const Frontend = () => {
  return (
    <div className="skills__content">
      <div className="skills__data">
        {/* <i className="bx bx-badge-check"></i> */}

        <div>
        <Icon className="frontend-icons"  icon="icon-park-outline:html-five" /> 
        
          <h3 className="skills__name">HTML</h3>
          <span className="skills__level">Advanced</span>
        </div>
      </div>
      <div className="skills__data">
      

        <div>
        <Icon className="frontend-icons" icon="el:css" />
          <h3 className="skills__name">CSS</h3>
          <span className="skills__level">Advanced</span>
        </div>
      </div>
      <div className="skills__data">
        {/* <i className="bx bx-badge-check"></i> */}

        <div>
        <Icon className="frontend-icons" icon="fa-brands:js-square" />
          <h3 className="skills__name">JavaScript</h3>
          <span className="skills__level">Basic</span>
        </div>
      </div>

      <div className="skills__data">
        {/* <i className="bx bx-badge-check"></i> */}

        <div>
        <Icon className="frontend-icons" icon="nonicons:react-16" />
          <h3 className="skills__name">React</h3>
          <span className="skills__level">Intermediate</span>
        </div>
      </div>

      <div className="skills__data">
        {/* <i className="bx bx-badge-check"></i> */}

        <div>
        <Icon className="frontend-icons" icon="akar-icons:figma-fill" />
          <h3 className="skills__name">Figma</h3>
          <span className="skills__level">Basic</span>
        </div>
      </div>

      {/* </div> */}
    </div>
    // </div>
  );
};

export default Frontend;

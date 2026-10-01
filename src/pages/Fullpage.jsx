import React from 'react';
import ReactDOM from 'react-dom/client';
import FullpageModule from '@fullpage/react-fullpage';

const ReactFullpage = FullpageModule.default ?? FullpageModule
const Fullpage = () => (
  <ReactFullpage
    
    licenseKey={"gplv3-license"}
    scrollingSpeed = {1000} 

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className='bg-pink-700 h-screen'>

            </div>
            
          </div>
          <div className="section">
            <div className='bg-blue-700 h-screen'>

            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default Fullpage;
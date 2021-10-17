import React from 'react';

// eslint-disable-next-line react/prop-types
function Spinner({colorLight, colorDark}) {
	return (
		<>
			<div id="loading"></div>
			<style>
				{`
        #loading {
          display: inline-block;
          width: 25px;
          height: 25px;
          border: 3px solid ${colorLight};
          border-radius: 50%;
        border-top-color: ${colorDark};
          animation: spin 1s ease-in-out infinite;
          -webkit-animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          to { -webkit-transform: rotate(360deg); }
        }
        @-webkit-keyframes spin {
          to { -webkit-transform: rotate(360deg); }
        }
        `}
			</style>
		</>
	);
}

export default Spinner;

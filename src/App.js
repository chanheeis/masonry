import React from 'react';
import MasonryFlex from './MasonryFlex';
import MasonryReact from './MasonryReact';
//https://w3bits.com/flexbox-masonry/ 참고
function App() {
  return (
    <div>
      <MasonryReact
        columns={3}
        gap={25}
      >
        {
          [...Array(12).keys()].map((key,index)=>{
            const height=200+Math.ceil(Math.random()*300);
            return (
              <div style={{
                height:`${height}px`,
                border:'1px solid black'
              }}>
                <span>{index}</span>
              </div>
            )
          })
        }
      </MasonryReact>
    </div>
  );
}

export default App;

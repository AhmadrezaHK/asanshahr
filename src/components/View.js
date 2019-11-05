import React from 'react';
import ReactJson from 'react-json-view';
import { connect } from 'react-redux';

function View({ ad }) {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ margin: 'auto', textAlign: 'center' , padding:'50px 0'}}>
        <ReactJson
          displayObjectSize={false}
          enableClipboard={false}
          collapsed={false}
          name='ad'
          src={ad}
          theme='monokai'
          displayDataTypes={false}
          collapseStringsAfterLength={100}
          style={{
            'textAlign': 'left',
            direction: 'ltr',
            padding: '1rem 2rem',
            'borderRadius': '0.5rem'
          }}
        />
      </div>
    </div>
  );
}

export default connect(state => {
  return { ad: state.selectedAd };
})(View);

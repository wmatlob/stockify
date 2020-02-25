import React, {Component} from 'react';

class countryList extends Component{
	render(){
		return(
			<div style={{overflow: 'auto', height: 'inherit', display: 'block', maxWidth: 300, marginLeft: 20,}}>
                <div> Item visible</div>
                <div> Item visible</div>
                <div> Item visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
            </div>
		);
	}
}
export default countryList;
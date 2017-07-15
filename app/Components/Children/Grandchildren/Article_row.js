// import React from 'react';

// var Article_row = React.createClass({

// 	getInitialState: function(){
// 		return {
// 			title: "",
// 			url: ""
// 		}
// 	},
// 	render: function(){
// 		var arrayOfNames = [];
// 		console.log(this.props.article_data);
// 		console.log(typeof(this.props.article_data)); 
// 		if(typeof(this.props.article_data) === String){
// 			console.log("still string");
// 		};
// 		return(
// 			<ul>
// 				{arrayOfNames.map(function(name,index){
// 					return <li key={index}>{name}</li>;
// 				})}
// 			</ul>
// 			)
// 	}
// });

// // Export the component back for use in other files
// export default Article_row;
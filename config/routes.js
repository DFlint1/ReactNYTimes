// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main.js');
var Form = require('../components/Children/Form.js'); 
var Results = require('../components/Children/Results.js'); 

// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Child1 then show the appropriate component*/}
		<Route path='Form' component={Form} >

			{/*Child1 has its own Grandchildren options*/}
			//<Route path='GrandChild1' component={GrandChild1} />
			//<Route path='GrandChild2' component={GrandChild2} />

			//<IndexRoute component={GrandChild1} />

		</Route>

		{/* If user selects Child2 then show the appropriate component*/}
		<Route path='Results' component={Results} />

		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Form} />
		
	</Route>


);
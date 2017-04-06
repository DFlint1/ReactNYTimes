//Main.js will set up all panels and render the main layout
import React from 'react';

// Import components of Children
import Form from './Children/Form';
import Results from './Children/Results';

// Helper Function
import helpers from './utils/helpers.js';

class Main extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			searchTerm: "",
			startDate:"",
			endDate:"",
			results: ""
		}

		this.setTerm = this.setTerm.bind(this);
		this.setStartDate = this.setStartDate.bind(this);
		this.setEndDate = this.setEndDate.bind(this);
	}

	setTerm(term){
		this.setState({
			searchTerm: term
		})
	}

	setStartDate(start){
		this.setState({
			startDate:start
		})
	}

	setEndDate(end){
		this.setState({
			endDate:end
		})
	}

	componentDidUpdate(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			helpers.runQuery(this.state.searchTerm,this.state.startDate,this.state.endDate)
				.then((data)=>{
					if (data != this.state.results)
					{
						console.log("HERE");
						console.log(data);

						this.setState({
							results: data
						})		
					}

				})		
		}
	}

	render(){
		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1 className="text-center">Let's React to NYTimes!</h1>
						<p className="text-center"><em>Search for articles and make notes!</em></p>
					</div>

					<div className="col-md-12">
					
						<Form setTerm={this.setTerm} setStartDate={this.setStartDate} setEndDate={this.setEndDate} />

					</div>
				</div>
				<div className="row">

					<div className="col-md-12">
				
						<Results results={this.state.results} />

					</div>

				</div>

			</div>
		)		
	}

}

// Export the component back for use in other files
export default Main;
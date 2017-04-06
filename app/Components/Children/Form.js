import React from 'react';
class Form extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			term: "",
			startDate:"",
			endDate:""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	handleClick(){
		console.log("CLICK");
		console.log(this.state.term);
		console.log(this.state.startDate);
		console.log(this.state.endDate);		

		this.props.setTerm(this.state.term);
		this.props.setStartDate(this.state.startDate);
		this.props.setEndDate(this.state.endDate);
	}

	render(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Query</h3>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Search for?</strong></h4>
								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
								<br />
								<h4 className=""><strong>From ( For dates April 1 2017 is 20170401)</strong></h4>
								<input type="text" className="form-control text-center" id="startDate" onChange= {this.handleChange} required/>
								<br />
								<h4 className=""><strong>To ( same as above, must be after "From" date )</strong></h4>
								<input type="text" className="form-control text-center" id="endDate" onChange= {this.handleChange} required/>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>

		)
	}
}

export default Form;

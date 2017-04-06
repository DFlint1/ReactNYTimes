import React from 'react';
import Article_row from './Grandchildren/Article_row';
class Results extends React.Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">

						<Article_row article_data={this.props.results} />

				</div>
			</div>

		)		
	}
}

// Export the component back for global use
export default Results;
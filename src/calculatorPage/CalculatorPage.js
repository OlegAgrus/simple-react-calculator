import React from 'react';
import {Calculator} from "./calculator/Calculator";
import {ResultsTable} from "./resultsTable/ResultsTable";

export class CalculatorPage extends React.Component{

    constructor(props) {
        super(props);

        this.resultsTable = React.createRef();
    }

    onReceiveResult = (result) => {
        this.resultsTable.current.addResult(result);
    };

    render() {
        return(
            <div className="calculator-page">
                <h1 style={{textAlign: "center", marginTop: "20px"}}>Calculator</h1>
                <Calculator onReceiveResult={this.onReceiveResult}/>
                <ResultsTable ref={this.resultsTable}/>
            </div>
        );
    }


}
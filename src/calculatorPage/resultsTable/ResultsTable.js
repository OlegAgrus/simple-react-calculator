import React from 'react';
import './ResultsTable.css';

export class ResultsTable extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            results: [],
        };
    }

    addResult = (result) => {
        return this.setState((state) => {
            return {
                results: [...state.results, result]
            };
        });
    };

    render() {
        return(
            <table className="results-table table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Result</th>
                </tr>
                </thead>
                <tbody>
                {this.state.results.map((item, index) =>
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

}
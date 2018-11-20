import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Link, NavLink } from 'react-router-dom';

interface FetchSalesDataState {

    slList: SLData[];

    loading: boolean;

} 

export class FetchSales extends React.Component<RouteComponentProps<{}>, FetchSalesDataState> {

    constructor() {

        super();

        this.state = { slList: [], loading: true };



        fetch('api/Sales/Index')

            .then(response => response.json() as Promise<SLData[]>)

            .then(data => {

                this.setState({ slList: data, loading: false });

            });



        // This binding is necessary to make "this" work in the callback  



    }  


    public render() {

        let contents = false

            ? <p><em>Loading...</em></p>

            : this.renderSalesTable(this.state.slList);



        return <div>

            <h1>Customer Data</h1>

            <p>This component demonstrates fetching Employee data from the server.</p>

            <p>

                <Link to="/addsales">Create New</Link>

            </p>

            {contents}

        </div>;

    }
    private renderSalesTable(slList: SLData[]) {

        return <table className='table'>

            <thead>

                <tr>

                    <th></th>

                    <th>SalesId</th>

                    <th>CName</th>

                    <th>PNAME</th>

                    <th>SNAME</th>

                    <th>DS</th>



                </tr>

            </thead>

            <tbody>

                {slList.map(sl =>

                    <tr key={sl.id}>

                        <td></td>

                        <td>{sl.id}</td>

                        <td>{sl.cnmame}</td>

                        <td>{sl.pname}</td>

                        <td>{sl.sname}</td>

                        <td>{sl.dsold}</td>



                        <td>



                        </td>

                    </tr>

                )}

            </tbody>

        </table>;

    }  


}
export class SLData {

    id: number = 0;

    cnmame: string = "";

    pname: string = "";

    sname: string = "";

    dsold: string = "";

}
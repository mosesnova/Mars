import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Link, NavLink } from 'react-router-dom';

interface FetchCustomerDataState {

    custList: CustomerData[];

    loading: boolean;

} 

export class FetchCustomer extends React.Component<RouteComponentProps<{}>, FetchCustomerDataState> {

    constructor() {

        super();

        this.state = { custList: [], loading: true };



        fetch('api/Customer/Index')

            .then(response => response.json() as Promise<CustomerData[]>)

            .then(data => {

                this.setState({ custList: data, loading: false });

            });



        // This binding is necessary to make "this" work in the callback  



    }  

    public render() {

        let contents = this.state.loading

            ? <p><em>Loading...</em></p>

            : this.renderEmployeeTable(this.state.custList);



        return <div>

            <h1>Customer Data</h1>

            <p>This component demonstrates fetching Employee data from the server.</p>

            <p>

                <Link to="/addcustomer">Create New</Link>

            </p>

            {contents}

        </div>;

    }  

    private renderEmployeeTable(custList: CustomerData[]) {

        return <table className='table'>

            <thead>

                <tr>

                    <th></th>

                    <th>CustomerId</th>

                    <th>Name</th>

                    <th>Address</th>

                   

                </tr>

            </thead>

            <tbody>

                {custList.map(cust =>

                    <tr key={cust.id}>

                        <td></td>

                        <td>{cust.id}</td>

                        <td>{cust.name}</td>

                        <td>{cust.address}</td>

                        

                        <td>

                           

                        </td>

                    </tr>

                )}

            </tbody>

        </table>;

    }  

    
}

export class CustomerData {

    id: number = 0;

    name: string = "";

    address: string = "";

}


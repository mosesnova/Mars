import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Link, NavLink } from 'react-router-dom';

import { CustomerData } from './FetchCustomer'; 

interface AddCustomerDataState {

    title: string;

    loading: boolean;

    custData: CustomerData;

}  

export class AddCustomer extends React.Component<RouteComponentProps<{}>, AddCustomerDataState> {
    constructor(props) {

        super(props);



        this.state = { title: "", loading: true, custData: new CustomerData };



       


        var id = this.props.match.params["id"];



        // This will set state for Edit employee  

        if (id > 0) {

            fetch('api/Customer/Details/' + id)

                .then(response => response.json() as Promise<CustomerData>)

                .then(data => {

                    this.setState({ title: "Edit", loading: false, custData: data });

                });

        }



        // This will set state for Add employee  

        else {

            this.state = { title: "Create", loading: false,  custData: new CustomerData };

        }



        // This binding is necessary to make "this" work in the callback  


    }



    public render() {

        let contents = false

            ? <p><em>Loading...</em></p>

            : this.renderCreateForm();



        return <div>

            <h1>Cutomer</h1>

            <h3>Employee</h3>

            <hr />

            {contents}

        </div>;

    }  
    private renderCreateForm() {

        return (

            <form  >

                <div className="form-group row" >

                    <input type="hidden" name="id" value={this.state.custData.id} />

                </div>

                < div className="form-group row" >

                    <label className=" control-label col-md-12" htmlFor="Name">Name</label>

                    <div className="col-md-4">

                        <input className="form-control" type="text" name="name" defaultValue={this.state.custData.name}  />

                    </div>

                </div >

              

                <div className="form-group row">

                    <label className="control-label col-md-12" htmlFor="Department" >Department</label>

                    <div className="col-md-4">

                        <input className="form-control" type="text" name="Department" defaultValue={this.state.custData.address} />

                    </div>

                </div>

                
                <div className="form-group">

                    <button type="submit" className="btn btn-default">Save</button>

                    <button className="btn">Cancel</button>

                </div >

            </form >

        )

    }  

}
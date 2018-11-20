using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactMarsOnboarding.Models;

namespace ReactMarsOnboarding.Controllers
{
    public class CustomerController : Controller
    {
        CustomerDataAccessLayer objcustomer = new CustomerDataAccessLayer();



        [HttpGet]

        [Route("api/Customer/Index")]

        public IEnumerable<Customer> Index()

        {

            return objcustomer.GetAllCustomers();

        }



        [HttpPost]

        [Route("api/Customer/Create")]

        public int Create(Customer customer)

        {

            return objcustomer.AddCustomer(customer);

        }



        [HttpGet]

        [Route("api/Customer/Details/{id}")]

        public Customer Details(int id)

        {

            return objcustomer.GetCustomerData(id);

        }



        [HttpPut]

        [Route("api/Customer/Edit")]

        public int Edit(Customer customer)

        {

            return objcustomer.UpdateCustomer(customer);

        }



        [HttpDelete]

        [Route("api/Customer/Delete/{id}")]

        public int Delete(int id)

        {

            return objcustomer.DeleteCustomer(id);

        }
    }
}
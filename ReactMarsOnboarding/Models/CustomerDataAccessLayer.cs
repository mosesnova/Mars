using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactMarsOnboarding.Models
{
    public class CustomerDataAccessLayer
    {
        MarsDatabaseContext db = new MarsDatabaseContext();



        public IEnumerable<Customer> GetAllCustomers()

        {

            try

            {

                return db.Customer.ToList();

            }

            catch

            {

                throw;

            }

        }



        //To Add new employee record     

        public int AddCustomer(Customer customer)

        {

            try

            {

                db.Customer.Add(customer);

                db.SaveChanges();

                return 1;

            }

            catch

            {

                throw;

            }

        }



        //To Update the records of a particluar employee    

        public int UpdateCustomer(Customer customer)

        {

            try

            {

                db.Entry(customer).State = EntityState.Modified;

                db.SaveChanges();



                return 1;

            }

            catch

            {

                throw;

            }

        }



        //Get the details of a particular employee    

        public Customer GetCustomerData(int id)

        {

            try

            {

                Customer customer = db.Customer.Find(id);

                return customer;

            }

            catch

            {

                throw;

            }

        }



        //To Delete the record of a particular employee    

        public int DeleteCustomer(int id)

        {

            try

            {

                Customer cust = db.Customer.Find(id);

                db.Customer.Remove(cust);

                db.SaveChanges();

                return 1;

            }

            catch

            {

                throw;

            }

        }


    }
}

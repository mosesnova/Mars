using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactMarsOnboarding.Models
{
    public class SalesDataAccessLayer
    {
        MarsDatabaseContext db = new MarsDatabaseContext();


        public IEnumerable<Sales> GetAllSales()

        {
             List<Sales> slist = new List<Sales>();


            try

            {
                foreach (var ds in db.ProductSold)
                {
                    Sales s = new Sales();
                    s.cnmame = (from d in db.Customer where d.Id == ds.CustomerId select d.Name).FirstOrDefault();
                    s.pname = (from p in db.Product where p.Id == ds.ProductId select p.Name).FirstOrDefault();
                    s.sname = (from ss in db.Store where ss.Id == ds.StoreId select ss.Name).FirstOrDefault();
                    s.dsold = ds.DateSold;
                    slist.Add(s);
                }
                
                return slist;
                

            }

            catch

            {

                throw;

            }

        }

    }
}

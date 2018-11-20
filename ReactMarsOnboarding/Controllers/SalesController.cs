using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactMarsOnboarding.Models;

namespace ReactMarsOnboarding.Controllers
{
    public class SalesController : Controller
    {
        SalesDataAccessLayer objsales = new SalesDataAccessLayer();



        [HttpGet]

        [Route("api/Sales/Index")]

        public IEnumerable<Sales> Index()

        {

            return objsales.GetAllSales();

        }
    }
}
using BudgetTracker.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.ServiceModel.Syndication;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Results;
using System.Xml;
using System.Xml.Serialization;

namespace BudgetTracker.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }

        public class Test :SyndicationFeed {
            public Test() {
                
            }
        }

        [Route("api/GetCurrencies")]
        [HttpGet]
        public JsonResult<CurrencyItem[]> GetCurrencies() {
            string path = "http://www.nationalbank.kz/rss/rates_all.xml";

            WebRequest request = WebRequest.Create(path);
            WebResponse response = request.GetResponse();
            Stream dataStream = response.GetResponseStream();

            XmlSerializer xs = new XmlSerializer(typeof(CurrencyRss));
            var rss = (CurrencyRss)xs.Deserialize(dataStream);
            return Json(rss.Channel.Items);
        }
    }
}

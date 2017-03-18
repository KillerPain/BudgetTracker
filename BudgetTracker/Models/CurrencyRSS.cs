using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace BudgetTracker.Models
{
    [Serializable()]
    public class CurrencyItem
    {
        [XmlElement("title")]
        public string Title { get; set; }
        [XmlElement("pubDate")]
        public string PubDate { get; set; }
        [XmlElement("description")]
        public string Description { get; set; }
        [XmlElement("quant")]
        public double Quant { get; set; }
        [XmlElement("index")]
        public string Index { get; set; }
        [XmlElement("change")]
        public double Change { get; set; }
        [XmlElement("link")]
        public string Link { get; set; }
    }

    [Serializable()]
    public class Channel {
        //[XmlElement("generator")]
        //public string Generator { get; set; }
        //[XmlElement("title")]
        //public string Title { get; set; }
        //[XmlElement("link")]
        //public string Link { get; set; }
        //[XmlElement("description")]
        //public string Description { get; set; }
        //[XmlElement("language")]
        //public string Language { get; set; }
        //[XmlElement("copyright")]
        //public string Copyright { get; set; }
        [XmlElement("item")]
        public CurrencyItem[] Items { get; set; }
    }

    [XmlRoot("rss")]
    [Serializable()]
    public class CurrencyRss {
        [XmlElement("channel")]
        public Channel Channel { get; set; }
    }

}
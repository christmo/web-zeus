/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zeus.ws.test;

import com.zeus.ws.pojo.Site;
import java.util.ArrayList;
import java.util.List;
//import java.util.ArrayList;
//import java.util.List;

/**
 *
 * @author christmo
 */
public class SitesWS {
    
    public List<Site> getSites(){
        List<Site> sitesList = new ArrayList<Site>();
        
        Site site = new Site();
        site.setName("Loja");
        site.setLat(-3.889977);
        site.setLon(-78.23123);
//        site.setLat(937400);
//        site.setLon(5093200);
        
        site.setCost(5000);
                
        sitesList.add(site);
        return sitesList;
    }
    
     public Site getSite(){
        Site site = new Site();
        site.setName("Loja");
        site.setLat(-3.889977);
        site.setLon(-78.23123);
        site.setCost(5000);
                
        return site;
    }
    
}

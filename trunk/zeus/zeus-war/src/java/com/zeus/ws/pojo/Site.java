/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zeus.ws.pojo;

/**
 *
 * @author christmo
 */
public class Site {
    private String name;
    private double lat;
    private double lon;
    private double cost;
    private String dir1;
    private String dir2;
    private String type;

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the lat
     */
    public double getLat() {
        return lat;
    }

    /**
     * @param lat the lat to set
     */
    public void setLat(double lat) {
        this.lat = lat;
    }

    /**
     * @return the lon
     */
    public double getLon() {
        return lon;
    }

    /**
     * @param lon the lon to set
     */
    public void setLon(double lon) {
        this.lon = lon;
    }

    /**
     * @return the cost
     */
    public double getCost() {
        return cost;
    }

    /**
     * @param cost the cost to set
     */
    public void setCost(double cost) {
        this.cost = cost;
    }

    /**
     * @return the dir1
     */
    public String getDir1() {
        return dir1;
    }

    /**
     * @param dir1 the dir1 to set
     */
    public void setDir1(String dir1) {
        this.dir1 = dir1;
    }

    /**
     * @return the dir2
     */
    public String getDir2() {
        return dir2;
    }

    /**
     * @param dir2 the dir2 to set
     */
    public void setDir2(String dir2) {
        this.dir2 = dir2;
    }

    /**
     * @return the type
     */
    public String getType() {
        return type;
    }

    /**
     * @param type the type to set
     */
    public void setType(String type) {
        this.type = type;
    }
}

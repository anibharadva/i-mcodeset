package restDalVO.operations;

import modelVO.general.AppProperties;

import java.io.FileInputStream;
import java.util.Properties;


/**
 * The Utility calss
 * @author Anita
 * @date August 21,2020
 *
 */
public class Utility {

	 public AppProperties getAppProperties(String param) {
	        String path = System.getProperty("catalina.base") +"/conf/application.properties";
	        Properties properties = new Properties();
	        try{
	            FileInputStream file;
	            //load the file handle for main.properties
	            file = new FileInputStream(path.trim());
	            //load all the properties from this file
	            properties.load(file);
	            //we have loaded the properties, so close the file handle
	            file.close();
	            return new AppProperties(properties.getProperty(param).trim());
	        } catch (Exception ex){
	            ex.printStackTrace();
	        }
	        return null;
	    }
}

package modelVO.general;

/**
 * Anita
 * @date August 21,2020
 */
public class AppProperties {
	    public String logFilePath;

	public AppProperties(String logFilePath) {
		this.logFilePath=logFilePath;
	}

	public String getLogFilePath() {
		return logFilePath;
	}

	public void setLogFilePath(String logFilePath) {
		this.logFilePath = logFilePath;
	}

	public AppProperties() {
	        super();
	    }
	   


}

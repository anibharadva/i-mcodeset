package modelVO.general;

/**
 * Anita
 * @date August 21,2020
 */

public class ApiResponse {

    public ApiResponse() {
        super();
    }

    public int respCode;
    public String respMessage;

    public ApiResponse(int respCode, String respMessage) {
        super();
        this.respCode = respCode;
        this.respMessage = respMessage;
    }
}

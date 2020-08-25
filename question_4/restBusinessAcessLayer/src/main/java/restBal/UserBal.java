package restBal;
import modelVO.general.ApiResponse;
import modelVO.general.IouDtl;
import modelVO.general.User;
import org.codehaus.jettison.json.JSONArray;
import java.util.List;


/**
 * @author anita
 *@date August 21,2020
 */
public interface UserBal {



	List<User> GetAllUsers();
	ApiResponse UpdateUser(User user);
	ApiResponse UpdateIouDetails(IouDtl iouDtl);
	JSONArray GetIouDtls();
	ApiResponse DeleteUser(String user);


}

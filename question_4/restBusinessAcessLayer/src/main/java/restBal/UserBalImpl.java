/**
 * 
 */
package restBal;

import java.util.List;
import modelVO.general.ApiResponse;
import modelVO.general.IouDtl;
import modelVO.general.User;
import org.codehaus.jettison.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import restDalVO.UserDalImpl;


/**
 * @author Anita
 *@date August 21,2020
 */
@Component
public class UserBalImpl implements UserBal{
	@Autowired
	UserDalImpl userDal;

	public List<User> GetAllUsers() {
		return userDal.GetAllUsers();
	}

	public ApiResponse UpdateUser(User user) {
		return userDal.UpdateUser(user);
	}

	public ApiResponse UpdateIouDetails(IouDtl iouDtl) {
		return userDal.UpdateIouDetails(iouDtl);
	}

	public JSONArray GetIouDtls() {
		return userDal.GetIouDtls();
	}

	public ApiResponse DeleteUser(String user) {
		return userDal.DeleteUser(user);
	}
}

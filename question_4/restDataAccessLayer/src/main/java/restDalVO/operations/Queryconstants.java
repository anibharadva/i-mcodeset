package restDalVO.operations;
/**
 * @author Anita
 * @date August 21,2020
 *
 */
public class Queryconstants {

	public static String getUsers = "SELECT * from user_mst order by user_name asc ";
	public static  String getUserByName="select user_name from user_mst where user_name=?";
	public static String createUser="insert into user_mst(user_name, created_on) values (?,?)";
	public static String updateIouDetails="insert into user_iou_dtl(lender,borrower,amount,created_on) values (?,?,?,?)";
	public static String getIouDtls="select u.user_name, ud.lender ,ud.borrower, ud.amount from user_mst u , user_iou_dtl ud\n" +
			" where (u.user_name=ud.lender or u.user_name=ud.borrower) and u.user_name=? \n";
	public static String deleteUserIouDtl="delete from user_iou_dtl   where lender=? or borrower=?";
	public static String deleteUser="delete from user_mst where user_name=?";

};

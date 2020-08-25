/**
 *
 */
package restDalVO;

/*
import com.compulynx.erevenue.dal.UserDal;
import com.compulynx.erevenue.dal.operations.AES;
import com.compulynx.erevenue.dal.operations.DBOperations;
import com.compulynx.erevenue.dal.operations.Queryconstants;
import com.compulynx.erevenue.models.*;
*/

import modelVO.general.ApiResponse;
import modelVO.general.IouDtl;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import restDalVO.operations.DBOperations;
import restDalVO.operations.Queryconstants;
import modelVO.general.User;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * class to handle the User data access functionalities
 *
 * @author Anita
 * @date August 21,2020
 */
public class UserDalImpl implements UserDal {

    private DataSource dataSource;

    public UserDalImpl(DataSource dataSource) {
        super();
        this.dataSource = dataSource;
    }

    /**
     * gets the list of users created
     *
     * @return list of users
     */
    public List<User> GetAllUsers() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        int counter = 1;
        try {
            connection = dataSource.getConnection();
            preparedStatement = connection
                    .prepareStatement(Queryconstants.getUsers);

            resultSet = preparedStatement.executeQuery();
            List<User> users = new ArrayList<User>();
            while (resultSet.next()) {
                User objUser = new User();
                objUser.name = resultSet.getString("user_name");

                users.add(objUser);
                counter++;
            }
            return users;
        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        } finally {
            DBOperations.DisposeSql(connection, preparedStatement, resultSet);
        }
    }

    /**
     * checks if the username is exists
     * @param userName
     * @return true if exists else false
     */
    public boolean checkUserName(String userName) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            connection = dataSource.getConnection();
            preparedStatement = connection
                    .prepareStatement(Queryconstants.getUserByName);
            preparedStatement.setString(1, userName);

            resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                return true;
            } else {
                return false;
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        } finally {
            DBOperations.DisposeSql(connection, preparedStatement, resultSet);
        }
    }

    /**
     * updates the new user details
     *
     *
     * @return 200 on successful update,500 on exception
     */
    public ApiResponse UpdateUser(User user) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int userId = 0;
        try {
            connection = dataSource.getConnection();
            if (checkUserName(user.name)) {
                return new ApiResponse(201,
                        "User Name is Already Exists");
            }
            preparedStatement = connection.prepareStatement(
                    Queryconstants.createUser);
            preparedStatement.setString(1, user.name);
            preparedStatement.setTimestamp(2, new java.sql.Timestamp(
                    new java.util.Date().getTime()));

            return (preparedStatement.executeUpdate() > 0) ? new ApiResponse(
                    200, "Records Updated") : new ApiResponse(500,
                    "Failed To Update");
        } catch (SQLException sqlEx) {
            sqlEx.printStackTrace();

            return new ApiResponse(500, sqlEx.getMessage());

        } catch (Exception ex) {
            ex.printStackTrace();
            return new ApiResponse(500, ex.getMessage());
        } finally {
            DBOperations.DisposeSql(connection, preparedStatement);
        }
    }

    /**
     * updates the user iou details
     * @param iouDtl object
     *
     * @return 200 on successful update,500 on exception
     */
    public ApiResponse UpdateIouDetails(IouDtl iouDtl) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = dataSource.getConnection();
            // connection.setAutoCommit(false);

            preparedStatement = connection.prepareStatement(
                    Queryconstants.updateIouDetails);
            preparedStatement.setString(1, iouDtl.lender);
            preparedStatement.setString(2, iouDtl.borrower);
            preparedStatement.setDouble(3, iouDtl.amount);
            preparedStatement.setTimestamp(4, new java.sql.Timestamp(
                    new java.util.Date().getTime()));

            return (preparedStatement.executeUpdate() > 0) ? new ApiResponse(
                    200, "Records Updated") : new ApiResponse(500,
                    "Nothing To Update");
        } catch (SQLException sqlEx) {
            sqlEx.printStackTrace();
            return new ApiResponse(500, sqlEx.getMessage());

        } catch (Exception ex) {
            ex.printStackTrace();
            return new ApiResponse(500, ex.getMessage());
        } finally {
            DBOperations.DisposeSql(connection, preparedStatement);
        }
    }

    /**
     * gets the list of iou details by users
     *
     * @return list of ioudetails
     */
    public JSONArray GetIouDtls() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        PreparedStatement preparedStatement1 = null;

        ResultSet resultSet = null;
        ResultSet resultSet1 = null;

        JSONArray finalOut= new JSONArray();
        try {
            connection = dataSource.getConnection();
            preparedStatement = connection
                    .prepareStatement(Queryconstants.getUsers);

            resultSet = preparedStatement.executeQuery();


            while (resultSet.next()) {
                JSONObject dataObj = new JSONObject();
                preparedStatement1 = connection.prepareStatement(Queryconstants.getIouDtls);
                preparedStatement1.setString(1, resultSet.getString("user_name"));
                resultSet1 = preparedStatement1.executeQuery();
                JSONObject obj1 = new JSONObject();
                JSONObject obj2 = new JSONObject();
                double balance=0;
                double totalOwedTo=0;
                double totalOwedBy=0;
                while (resultSet1.next()) {
                    if(resultSet1.getString("borrower").equalsIgnoreCase(resultSet.getString("user_name"))){
                        //lenderName=resultSet1.getString("lender");
                        obj1.put(resultSet1.getString("lender"), resultSet1.getDouble("amount"));
                        totalOwedTo +=resultSet1.getDouble("amount");
                        System.out.println("totalOwedTo"+ totalOwedTo);
                    }
                    if(resultSet1.getString("lender").equalsIgnoreCase(resultSet.getString("user_name"))){
                        obj2.put(resultSet1.getString("borrower"), resultSet1.getDouble("amount"));
                        totalOwedBy +=resultSet1.getDouble("amount");
                        System.out.println("totalOwedBy"+ totalOwedBy);
                    }
                    balance=totalOwedBy-totalOwedTo;
                }
                JSONArray jsonArray = new JSONArray();
                jsonArray.put(obj1);
                JSONArray jsonArray2 = new JSONArray();
                jsonArray2.put(obj2);
               // jsonArray.put(obj2);

                dataObj.put("user",resultSet.getString("user_name"));
                dataObj.put("owes", jsonArray);
                dataObj.put("owed_by",jsonArray2);
                dataObj.put("balance",balance);


                finalOut.put(dataObj);
                 //jsonStr = dataObj.toString();

                System.out.println("jsonString: "+finalOut);
            }
            return finalOut;
        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        } finally {
            DBOperations.DisposeSql(preparedStatement1,resultSet1);
            DBOperations.DisposeSql(connection, preparedStatement, resultSet);
        }
    }

    /**
     * deletes of iou details of user
     * @param user
     * @return 204 on successful update,500 on exception
     */
    public ApiResponse DeleteUser(String user) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        PreparedStatement preparedStatement1 = null;
        ResultSet resultSet = null;
        ResultSet rs = null;
        int userId = 0;
        try {
            connection = dataSource.getConnection();
            connection.setAutoCommit(false);
            preparedStatement1=connection.prepareStatement(Queryconstants.deleteUserIouDtl);
            preparedStatement1.setString(1, user);
            preparedStatement1.setString(2, user);
            if(preparedStatement1.executeUpdate() > 0){
                preparedStatement = connection.prepareStatement(
                        Queryconstants.deleteUser);
                preparedStatement.setString(1, user);
            }
            connection.commit();
            return (preparedStatement.executeUpdate() > 0) ? new ApiResponse(
                    204, "Records Updated") : new ApiResponse(500,
                    "Nothing To Update");

        } catch (SQLException sqlEx) {
            try {
                connection.rollback();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            sqlEx.printStackTrace();

            return new ApiResponse(500, sqlEx.getMessage());

        } catch (Exception ex) {
            try {
                connection.rollback();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return new ApiResponse(500, ex.getMessage());
        } finally {
            DBOperations.DisposeSql(preparedStatement1);
            DBOperations.DisposeSql(connection, preparedStatement);
        }
    }
}

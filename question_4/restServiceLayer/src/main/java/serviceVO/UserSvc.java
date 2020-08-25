/**
 *
 */
package serviceVO;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import modelVO.general.ApiResponse;
import modelVO.general.AppProperties;
import modelVO.general.IouDtl;
import modelVO.general.User;
import org.apache.log4j.Logger;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import restBal.UserBalImpl;
import restDalVO.operations.Utility;


/**
 * @author Anita
 * @date August 21,2020
 */

@Component
@Path("/userApi")
public class UserSvc {
    private static final Logger log = Logger.getLogger(UserSvc.class);
    String fileName = "";
    String PATH = "";
    @Context
    HttpServletRequest httpRequest;
    @Autowired
    UserBalImpl userBal;

    /**
     * api to test server up and running
     *
     * @return OK on success
     * */
    @Path("/test")
    @GET
    public Response test() {
        log.info("service test");
        log.info("Response ::: OK|1");
        log.info("Remote address ::: " + httpRequest.getRemoteAddr());
        return Response.status(Response.Status.OK).entity("OK|1").build();
    }

    /**
     * api to get users
     *
     * @return 200 on success with list of users json
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/users/")
    public Response GetUsers() {
        List<User> users = userBal.GetAllUsers();
        return Response.status(200).entity(users).build();
    }

    /**
     * api to post new user details
     * @param user object
     * @return 200 on successful update
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/add")
    public Response UpdateUser(User user) {
        ApiResponse response = userBal.UpdateUser(user);
        return Response.status(200).entity(response).build();
    }

    /**
     * api to update user's iou details
     * @param iouDtl
     * @return 200 on successful update
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/iou")
    public Response UpdateIouDtl(IouDtl iouDtl) {
        ApiResponse response = userBal.UpdateIouDetails(iouDtl);
        JSONArray result= new JSONArray();
        if(response.respCode==200){
          result=userBal.GetIouDtls();
        }
        return Response.status(204).entity(result).build();
    }

    /**
     * api to get ioudetails of users
     *
     * @return 200 on success and list of user iou details
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ioudtl/")
    public Response GetIouDtl() {
        JSONArray iouResp = userBal.GetIouDtls();
        return Response.status(200).entity(iouResp).build();
    }

    /**
     * deletes of iou details of user
     * saves the log in to file before of deleted user.
     * @param user
     * @return 204 on successful update
     */
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/deleteUser/{user}")
    public Response DeleteUser(@PathParam("user") String user) {

        log.info("Delete Request");
        //Uncomment below code to log the details in the file
        //Created properties file to log the delete user details
        //change the file path in properties file located in tomcate->conf directory
       /* AppProperties appProperties = new AppProperties();
        Utility util = new Utility();
        String param = "log.filepath";
        appProperties = util.getAppProperties(param);
        log.info("Done Reading Props File##"
                + appProperties);
        PATH = appProperties.logFilePath;
        log.info("Log File Path##" + PATH);
        log.info("User to delete##"+ user);*/


        ApiResponse response = userBal.DeleteUser(user);
        return Response.status(204).entity(response).build();
    }
}

import app from "./index.js"
import * as usercontroller from "./src/controllers/user-controller.js";
import * as jobController from "./src/controllers/job-controller.js";
import * as applicantController from "./src/controllers/applicant-controller.js";
import * as middlewares from "./src/middlewares/auth-check.js";
import { upload } from "./src/middlewares/resume-upload.js";

app.listen(5000, () => {
    console.log("Server is listening at port 5000");
  });
  
  app.get("/",usercontroller.renderLoading);

  app.post("/register",usercontroller.createUser)

  app.get("/login",usercontroller.renderLogin);

  app.post("/login",usercontroller.Login);

  app.get("/logout",usercontroller.Logout);



  app.get("/jobs",jobController.loadJobs);

  app.get("/postjob", middlewares.loginCheck, jobController.loadpostJobs);

  app.post("/job",  jobController.createJob);

  app.get("/job/:id",jobController.jobDetails);

  app.get("/job/update/:id",middlewares.loginCheck, jobController.loadUpdate);
  
  app.post("/job/update/:id",jobController.postUpdate);

  app.get("/job/delete/:id",jobController.getDelete);
  
  app.post("/search",jobController.jobFilter);


  app.post("/apply/:id",upload.single('resume'),applicantController.addApplicant);
  app.get("/apply/applicants/:id",middlewares.loginCheck,applicantController.loadApplicant);



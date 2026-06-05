## Problem Statement
### Vehicle Maintenance Service Scheduler
   Given a list of Vehicle requiring maintenance each with an operational score and estimated service duration, and daily mechanic hour budget.
 * **Goal** : To determine the subset of Vehicles to service to maximise the total operational impact score within the available budget. 
 *  APIS Used:
      [http://4.224.186.213/evaluation-service/depots]
          . It contains details of Vehicles ID and Mechanic Hours.
      - [http://4.224.186.213/evaluation-service/vehicles]
        . It contains Vehicles TaskID, Duration, Impact Score.
#### LOGGING MIDDLEWARE:
  . Logging Middleware is the critical component for building robust and observable applications. Implementing Logging includes operations such as debug,warn,info,error.
I have successfully done logging mechanisms.
Logging is a mechanism used to display errors,info,warns,debug messages to users. 

 * 1. Auth
.  Used to check whether it is authorised or not
.  Log("backend","error","auth","Authorisation failed")
.  This is used in Vehicle_maintanence_scheduler code
 
 * 2. Handler
 . Used to handle the input-output requests from clients
.  Log("backend","info","handler","Provide valid information")
 . This is used in Vehicle_maintance_scheduler

#### I registered Sucessfully.
<img width="1366" height="768" alt="Screenshot (198)" src="https://github.com/user-attachments/assets/d9db7c96-327c-4312-89da-9eb968e9204e" />

#### Authorisation successful
<img width="1366" height="768" alt="Screenshot (199)" src="https://github.com/user-attachments/assets/bf9f7845-7b0d-48f2-99d6-128a1b0317e1" />


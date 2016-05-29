angular.module("myApp",[])
.controller("appCtrl",function($scope){
       $scope.employee=[
                  {
                      name:"ben",
                      dateOfBirth:"23/11/1980",
                      gender:"male",
                      salary:"20,000"
                  },
           
                     {
                      name:"sara",
                      dateOfBirth:"05/05/1970",
                      gender:"female",
                      salary:"10,000"
                  },
                    {
                      name:"mark",
                      dateOfBirth:"15/05/1989",
                      gender:"male",
                      salary:"12,000"
                  },
                    {
                      name:"akash",
                      dateOfBirth:"29/05/1989",
                      gender:"male",
                      salary:"80,000"
                  },
                    {
                      name:"badhrel",
                      dateOfBirth:"12/09/1983",
                      gender:"female",
                      salary:"6,000"
                  }
                         
       ];
    
     
           $scope.sortField="name";
     
          
});
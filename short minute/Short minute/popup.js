var mydata=[ 
    ["python","youtube","code with harry"],
    ["python","youtube","Thaapa Technical"],
    ["python","blogs","fullstackpython.com"],
    ["python","blogs","pybloggers.com"],
    ["python","Courses","udemy.com"],
    ["python","Courses","Coursera.com"],

    
    
    ["JAVA","Courses","Udacity.com"],
    ["JAVA","Courses","Skillshare.com"],
    ["JAVA","blogs","www.baeldung.com"],
    ["JAVA","blogs","pybloggers.com"],
    ["JAVA","youtube","Thoughts on Java"],
    ["JAVA","youtube","Devoxx"],

    ["Javascript","youtube","FreeCodeCamp."],
    ["Javascript","youtube","The Coding Train"],
    ["Javascript","blogs","https://javascript.info/"],
    ["Javascript","blogs","https://www.w3schools.com/js/DEFAULT.asp"],
    ["Javascript","Courses","eduonix.com"],
    ["Javascript","Courses","Lynda.com"],

    ["web dev.","youtube","FreeCodeCamp."],
    ["web dev.","youtube","The Coding Train"],
    


];

function makedropdown(data, level1filter){
    const filterArray = data.filter(r=> r[0] === level1filter);

    
    const uniqueList = getuniquevalues(filterArray, 1);
    
     
    const selectLevel2 = document.getElementById("level3");

    populatedropdown(selectLevel2, uniqueList);

} 

function applydropdown(){
    const selectlevel1value = document.getElementById("level2").value;
    makedropdown(mydata, selectlevel1value);
}

function afterdocumentload(){
    populatefirstleveldropdown(); 
    applydropdown();   
}

function getuniquevalues(data,index){
    
    const unique0ptions = new Set();
    data.forEach( r=> unique0ptions.add(r[index]));
    return [...unique0ptions];
}

function populatefirstleveldropdown(){
    const uniqueList = getuniquevalues(mydata,0);
    const el = document.getElementById("level2");
    populatedropdown(el, uniqueList);

}

function populatedropdown(el, listasarray){
    el.innerHTML = "";
    listasarray.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        el.appendChild(option);
    });
}

document.getElementById("level2").addEventListener("change", applydropdown);
document.addEventListener("DOMContentLoaded",afterdocumentload);

// $(function(){
//     var countryOptions;
//     var stateOptions;
//     var districtOptions;
//         $.getJSON('countries.json',function(result){
//             $.each(result, function(i,country) {
//                 //<option value='countrycode'>contryname</option>
//                 countryOptions+="<option value='"
//                 +country.code+
//                 "'>"
//                 +country.name+
//                 "</option>";
//                  });
//                  $('#country').html(countryOptions);
//         });
//         $("#country").change(function(){
//         if($(this).val()=="IN"){
//                 $.getJSON('indianStates.json',function(result){
//                 $.each(result, function(stateCode,stateName) {
//                     //<option value='stateCode'>stateName</option>
//                     stateOptions+="<option value='"
//                     +stateCode+
//                     "'>"
//                     +stateName+
//                     "</option>";
//                      });
//                      $('#state').html(stateOptions);
//                 });
//             }
//         });
        
//         $("#state").change(function(){
//         if($(this).val()=="MH"){
//                 $.getJSON('MHDistricts.json',function(result){
//                 $.each(result, function(i,district) {
//                     //<option value='districtName'>districtName</option>
//                     districtOptions+="<a><option value='"
//                     +district.name+
//                     "'>"
//                     +district.name+
//                     "</option></a>";
//                      });
//                      $('#district').html(districtOptions);
//                 });
//             }
//         });
        
//     });
    
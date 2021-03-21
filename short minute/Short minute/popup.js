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

function makedropdown(data, filterasarray, targetelement){
    const filterArray =  filterarray(data,filterasarray);

    const uniqueList = getuniquevalues(filterArray,filterasarray.length);
    
    populatedropdown(targetelement, uniqueList);

} 

function applydropdown(){
    const selectlevel1value = document.getElementById("level1").value;
    const selectLevel2 = document.getElementById("level2");

    makedropdown(mydata, [selectlevel1value],selectLevel2 );
}

function applydropdown2(){
    const selectlevel1value = document.getElementById("level1").value;
    const selectlevel2value = document.getElementById("level2").value;
    const selectLevel3 = document.getElementById("level3");

    makedropdown(mydata, [selectlevel1value,selectlevel2value],selectLevel3 );
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
    const el = document.getElementById("level1");
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

function filterarray(data,filterasarray){
  return  data.filter(r => filterasarray.every((item,i) => item === r[i]));

}

document.getElementById("level1").addEventListener("change", applydropdown);
document.getElementById("level2").addEventListener("change", applydropdown2);

document.addEventListener("DOMContentLoaded",afterdocumentload);

let btnopen = document.querySelector('button');
let input  = document.querySelector('input');

btnopen.addEventListener('click', () =>{
    window.open(input.value, '_blank');
} );

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
    
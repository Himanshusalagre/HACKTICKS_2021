$(function(){
var countryOptions;
var stateOptions;
var districtOptions;
	$.getJSON('courses.json',function(result){
		$.each(result, function(i,country) {
			//<option value='countrycode'>contryname</option>
			countryOptions+="<option value='"
			+country.code+
			"'>"
			+country.name+
			"</option>";
			 });
			 $('#country').html(countryOptions);
	});
	$("#country").change(function(){
	if($(this).val()=="JA"){
			$.getJSON('platform.json',function(result){
			$.each(result, function(stateCode,stateName) {
				//<option value='stateCode'>stateName</option>
				stateOptions+="<option value='"
				+stateCode+
				"'>"
				+stateName+
				"</option>";
				 });
				 $('#state').html(stateOptions);
			});
		}
	});
	
	$("#state").change(function(){
	if($(this).val()=="YT"){
			$.getJSON('resources.json',function(result){
			$.each(result, function(i,district) {
				//<option value='districtName'>districtName</option>
				districtOptions+="<a><option value='"
				+district.name+
				"'>"
				+district.name+
				"</option></a>";
				 });
				 $('#district').html(districtOptions);
			});
		}
	});
	
});

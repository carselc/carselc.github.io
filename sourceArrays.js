bee = "carsel carsel carsel carsel carsel carselcarsel carsel carsel carsel carsel carselcarsel carsel carsel carsel carsel carselcarsel carsel carsel carsel carsel carselcarsel carsel carsel carsel carsel carsel."   
bee = bee.replace(/[^A-Za-z0-9_– ]/g, "");  
bee = bee.replace(/\s\s+/g, ' ');  
bee = bee.split(" ");  

casey = "caseycasey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey casey ."
casey = casey.replace(/[^A-Za-z0-9-– ]/g, "");  
casey = casey.replace(/\s\s+/g, ' '); 
casey = casey.split(" "); 


function strip_string(str) {
	str = str.replace(/[^A-Za-z0-9_– ]/g, "");  
	str = str.replace(/\s\s+/g, ' '); 
	return str  
}
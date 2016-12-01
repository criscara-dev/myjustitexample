/* this is my JS for the car luxury practise */


var myManufacturer = document.getElementById("manufacturer");
myManufacturer.addEventListener("change", loadMyData, false);

var mySurvey = document.getElementById("survey");
mySurvey.addEventListener("change", loadMyData, false);

function loadMyData () {
    
    var surveyStored = mySurvey.options[mySurvey.selectedIndex].value;
    /*console.log(surveyStored);*/
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    /*console.log(manifacturerStored);*/
    
    

var myRequest = new XMLHttpRequest;

myRequest.open("GET", "https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json", true);

myRequest.onload = function () {
    
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        var myData = JSON.parse(myRequest.responseText); 
        
        
        
        
        if (manufacturerStored === "") {
            
            function clearAll () {
                
                var hideText = document.getElementsByClassName("data");
                for (var i = 0; i < hideText.lenght; i++) {
                    
                    hideText[i].innerHTML = "";
                    
                    console.log(hideText)
                }
            }
            
              clearAll();
            
            /*document.getElementById("manufacturerC").innerHTML = "";
            document.getElementById("modelC").innerHTML = "";
            document.getElementById("priceC").innerHTML = "";
            document.getElementById("descriptionC").innerHTML = "";
            document.getElementById("videoC").innerHTML = "";*/
    
        } else {
            document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
            document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
            document.getElementById("priceC").innerHTML = myData.data[manufacturerStored].price;
            document.getElementById("descriptionC").innerHTML = myData.data[manufacturerStored].wiki;
            
            document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
            document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
            document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
            document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
            document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
            
            /*document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;*/
            
            // insert image from JSON
            document.getElementById("imgC").innerHTML = '<img src="https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/' +myData.data[manufacturerStored].img + '" width = "auto" height = "auto" alt = "car Image">';            
                   
        /*
        
            document.getElementById("videoC").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/W6dwnPid490" frameborder="0" allowfullscreen></iframe>';       */     
            }   
        
        
        
        
        
    //  console.log(myData.data[0].img);
    // all action happen here
    }   
    
    // this is code to change chart
    
    var cT = document.getElementById("survey").value;
    
    
    var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme1",//theme1
        
        backgroundColor: "transparent",
		/*title:{
			text: "Basic Column Chart - CanvasJS"              
		},*/
		animationEnabled: true,   // change to true
		data: [              
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: cT,
			dataPoints: [
				{ label: "Body",  y: myData.data[manufacturerStored].quality[0].rating  },
				{ label: "Accessories", y: myData.data[manufacturerStored].quality[1].rating  },
				{ label: "Powertrain", y: myData.data[manufacturerStored].quality[2].rating  },
				{ label: "Mechanical",  y: myData.data[manufacturerStored].quality[3].rating  },
				{ label: "Overall",  y: myData.data[manufacturerStored].quality[4].rating  }
			]
		}
		]
	});
	chart.render();
    
    
}

myRequest.onerror = function () {
    document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach the server!";
}

myRequest.send();

    
    
}

    
    







class path // like a card
{
	constructor(title, locations)
	{
		this._title = "";
		this._locations = [];
	
	}
	
	get location()
	{
		return this._location;
	}
	
	initialise(object)
	{
		this._title = object.title;
		this._locations = object.locations;
	}
	
	toString()
                {
                    return "" + this._getpathName() + " : " +  this._getpathLocations();
                }
	
	_getpathName()
	{
		return this._title ;
	}
	
	_getpathLocations()
	{
		return JSON.stringify(this._locations);
	}
	get points()
    {
        
    }
	
    get distance()
    {
        
    }
	
	set location(newLocation)
	{
		this.location = newLocation;
		
	}
	
	set pathName(newPathName)
	{
		this.pathName = newPathName;
		
	}
	
	degrees_to_radians(degrees)
		{
  			var pi = Math.PI;
  			return degrees * (pi/180);
		}

 	 distancefromonetoanother(latlng)
		{
	let result = 0;
		for(let i = 0; i < latlng._locations.length -1; i++)
		{
	var R = 6371e3; // metres
	var fi1 = degrees_to_radians(latlng._locations[i].lat);
	var fi2 = degrees_to_radians(latlng._locations[i+1].lat);
	var deltafi = degrees_to_radians((latlng._locations[i+1].lat-latlng._locations[i].lat));
	var deltalambda = degrees_to_radians((latlng._locations[i+1].lng-latlng._locations[i].lng));

	var a = Math.sin(deltafi/2) * Math.sin(deltafi/2) +
        Math.cos(fi1) * Math.cos(fi2) *
        Math.sin(deltalambda/2) * Math.sin(deltalambda/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		let d = R * c;
	result += d;

	
	}
		return result;
		}
	
	
}
let test = localStorage.getItem("paths");

let objecttest = JSON.parse(test); // turns the callback data into an object
let array  = [];
for( let i = 0; i < objecttest.length; i++) 
{
	let allpaths = new path();//creates a new path
allpaths.initialise(objecttest[i]);
	array.push(allpaths);

}


//console.log(array[0]); //jusst to test if it extracts a certain paath

class pathLine
{
	constructor(list, title)
	{
		this._list = list;
		this._title = title; 	
	}
	
	get list()
	{
		return this._list;
	}
	
	get title()
	{
		return this._title;
	}
	
	
	set list(newList)
	{
		this._list = newList;
		
	}
	
	set title(newTitle)
	{
		this._title = newTitle;
		
	}	
	
}

//FEATURE 4
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

let pathdirec = "savedpath";

function pathsclicked(pathfromtoptobottom) //the first tab represents 0
{
    

 location.href = "navigate.html";
localStorage.setItem(pathdirec,JSON.stringify(array[pathfromtoptobottom]._locations)); // stores the clicked routes into the local storage so we can retrieve it later to show the polylines



 //set to local storage of the path clicked with i, then get local storage to show it on the map
}
console.log(array);


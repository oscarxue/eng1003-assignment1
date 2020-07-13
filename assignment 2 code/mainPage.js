//FEATURE 1



// window is not needed, only in playground.
window.routesResponse = function(routes)
{
    let pathString = JSON.stringify(routes); // stringify the objects
   localStorage.setItem("paths", pathString);// stores into the "paths" key
	
    //document.getElementById("outputArea").innerHTML = pathString;
};


if (localStorage !== undefined)
    {

        // calls the routes with respect to the url
        let script = document.createElement('script');
        script.src = "https://eng1003.monash/api/campusnav/?campus=clayton&callback=routesResponse";
        document.body.appendChild(script);

    }
else
    {
        console.log("local Storage is not available");
    }
// access local storage to test if it works

//console.log(test);
let pathsListElement = document.getElementById('pathlist');
function pathsResponse(Patharray)
{
    array = Patharray;
    let listHTML = "";
    for (let i =0; i < Patharray.length; i++)
    {
        listHTML += "<tr> <td onmousedown=\"pathsclicked("+i+")\" class=\"full-width mdl-data-table__cell--non-numeric\">" + Patharray[i]._title ;
        let sample = new path();
        let j = sample.distancefromonetoanother(Patharray[i]);
        listHTML += "<div class=\"subtitle\">" + j.toFixed(2) +" metres " + ", " + Patharray[i]._locations.length + " turns." + "</div></td></tr>";
    }
    pathsListElement.innerHTML = listHTML;
    
    
}
pathsResponse(array); // put it in main.js so navigate.html doesnt show listhtml


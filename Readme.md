This is a movie details fetching API where displaying the fetched movie results in a user friendly manner in aweb page using react router...

The basic structure such a main three components say pages , components and wrappers folders are created 

Wrapper holds the top bar where it will be displayed accross all the pages 
Components holds the code where we are about to use them repeteadly over the pages ...say Detailed movie results and sample movie data to be displayed on the web page for Good looking..
Pages going to the hold the code for differnt child routes as well as parent routes...

we used axios for fetching data we have also created a instance for the axios call to prevent entering the Url every time as well as to make the code URl easy to edit in case...

loaders are being used to share the fetched data from api to the pages before the page loads

ther are different loaderes say 
one for Deailed movie details 
two for sample movie details
one for Search movie details

App.jsx will be our root where we are Setting up our router and routes we also use Use Context to share data between components.....

poroper error handling incase of no data fetched and so on has been implemented 

try catch used for error handling ...few then catch tooo...

Usage of the Web page 

user can enter the movie name on the input tab 
user can use Gern drop down to select if any 
once movie name has been entered user can click the search button for results ...movie name is mandatory for search where Gern is optional

few data being retrived might take more time say max 20 to 25 sec ....while the results are less the data will display faster ...the less the data rendering time reduces ....

pagination has been implimented in case lage data is been recived for search 

In addition for eacresponse ojcet from a API call we have added a key value pair that is ratings and a random No from 1 to 5 for rendering ratings for that movie..

there is a seperate filter for year where we can filter movies by year...








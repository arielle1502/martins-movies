martin's movies

In the project directory, you can run:
npm start

Built With:
React
Redux
Bootstrap
Axios
FontAwesome library

Single page application where popular movies from The Movie DataBase API are displayed in cards. The search functionality uses the API's multisearch feature which allows searching for various keywords. There is also a filter dropdown that allows users to select from 4 different langauges and then have movies in that language display. Users are able to click a button titled 'watched' and a checkmark icon will replace a crossed out icon to tell the user that selection has been made. If the user refreshes, the selections will remain. Redux-Persist was used to create that functionality. Users can also click the 'Deatails' button to be taken to a website that displays all of the movie's information.

Issue that needs attention:
Responsiveness is not where it needs to be, due to being unable to work out how to add a media querie to a component whose styles are being applied on top of an array map. This is someting I will continue to look for a work around with.


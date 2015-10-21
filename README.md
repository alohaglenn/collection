# PhotoFeed: Search Instagram Tags

![PhotoFeed](http://i.imgur.com/R9UH8zn.gif?1)

### Live Link 

http://getphotofeed.herokuapp.com/

### Instructions to run locally

1. git clone
2. go to public/components/photoFeed/feed.ctrl.js
3. on line 16, replace 'APIcred.CLIENT_ID' with your own Instagram client_id
4. npm install
5. npm start

### Frontend/Backend

- Developed front-end using Angular MVC architecure and backend with a Node/Express server
- Designed UI using Bootstrap
- Created a search function that calls the Instagram API with the user's requested tag name
- Returned API call results to resemble instant film on a separate results page
- User can click on a user's photos to open up a new tab to the original url on Instagram
- User can click on user's avatar or username to open up a new tab for the user's Instagram profile
- Deployed app to Heroku

### Future Iterations

Search by date range: I was able to convert the UNIX timestamp from the Instagram API and render a search bar with a datepicker, but I just needed a bit more time to complete this.

Pagination: I accessed the pagination.next_url property and originally added pagination from Bootstrap. In the near future, I plan to link a 'next' results button to another GET request using pagination.next_url.

Favorites: When a user 'favorites' a photo, the photo and additional info (username, timestamp, etc) will be stored in PostgreSQL. The user then can click on a 'favorites' tab to view that collection. 

Print: A user can send a photo from their 'favorites' to get printed and mailed to them (via a form submission a third-party printer).

Google Maps: A user can retrieve search results based on location. 
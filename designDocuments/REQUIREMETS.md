User
	- User can login
	- User can CRUD themselves
	- User can register for races/events
	- User can select which classes they would like to be in
	- User can be in multiple classes for the same event
	- User can remove themselves from races/events

Moderator
	- A moderator is a user with special privilages
	- Moderators can CRUD races/events
	- Moderators can CRUD users in events

Admin
	- An admin is a user with special privilages
	- An admin can do everything a moderator can do
	- Admins can CRUD coupons/free races and "give them out"
	- Admins can CRUD users
	- Admins can assign other Admins/Moderators

Races/Events
	- Events can have many users
	- Events must have at least one class
	- Events can have many classes
	- Events must have a date, and a time
	- Events can be recurring/multiple dates (Points Series)
	- Events may be public or private
	- Events may allow, or disallow free races or coupons

Classes
	- Classes must have a description
	- Classes must have a "rule set"

Coupons/Free races
	- A user can have zero or many coupons/free races
	- A user can choose when to use their coupons/free races

Out of scope things
	- Payment via PayPal (Not completely out of scope)
	- Advanced Reporting (See when a user usually comes to events, and how may times)
	- Service Module (Something to manage the billable service being done by employees on cars)

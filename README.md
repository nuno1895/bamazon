#Bamazon

### Synopsis
***

An interactive shopping node app where MySQL and Node.JS are used to allow users to purchase items as a customer, view, track and update the product inventory as a manager, and track the total sales by department as an executive.

##### Bamazon Customer Portal
***

The Bamazon Customer Portal allows users to view the current items available for purchase.  The user will be prompted to enter the item id# and how many items they wish to purchase.  If the item is in stock, the order will be completed and the user will see the total amount of their purchase.

![Customer Portal](images/customerView.gif)


##### Bamazon Manager Portal
***

The Bamazon Customer Portal allows users to view and edit the inventory of the store.  The user will be prompted to choose from the following options:
* View products for sale
* View low inventory
* Add to inventory
* Add a new product

###### Manager Options 1 & 2
***

The first option allows the user to see the list of products that are currently for sale, what department the item belongs to, the price of the product and how much stock is left for that product.

The second option allows the user to see a list of all inventory items   

![Bamazon Manager Portal - Options 1 & 2](Images/managerView1.gif)


###### Manager Options 3 & 4
***

The third option allows the user to update the inventory for a specific product.  A prompt asks what the id is for the product the user wants to update.  A second prompt asks how many items the user wishes to increase the quantity by.

The last option allows the user to add a new product to the inventory.  Prompts ask the user for the product id#, the product name, the department name, the price and the stock quantity.

![Bamazon Manager Portal - Options 3 & 4](Images/managerView2.gif)




#### Contributors:
***

Nuno Tavares [GitHub](https://github.com/nuno1895)



#### Technologies Used:
***

* Javascript
* nodeJS
* MySQL
* npm packages:
	- [mysql](https://github.com/felixge/node-mysql)
	- [prompt](https://github.com/flatiron/prompt)
	- [colors](https://github.com/Marak/colors.js)
	



#### License
***

Copyright 2017 Rutgers Coding Bootcamp - Nuno Tavares



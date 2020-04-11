// ==UserScript==
// @name            Bay Cities Order Placer
// @namespace       bay_cities_order_placer
// @include         http://www.bcdeli.com/order.php
// @version         1.0
// @description     This script automagically fills out your Bay Cities order. The default is a large Godmother with salt, pepper, and mayo.
// @copyright       2014+, Nikola Kantar, nkantar.com
// @require         http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// order form vars
var company = '';
var name = '';
var phone = '';
var email = '';

// create new order item
newItem = new Object();
newItem.clientName = name;
newItem.condimArray = new Array();
newItem.condimArray[0] = false;
newItem.condimArray[1] = false;
newItem.condimArray[2] = false;
newItem.condimArray[3] = false;
newItem.condimArray[4] = false;
newItem.condimArray[5] = false;
newItem.condimArray[6] = false;
newItem.condimArray[7] = false;
newItem.condimArray[8] = false;
newItem.condimArray[9] = true;
newItem.condimArray[10] = false;
newItem.condimArray[11] = true;
newItem.condimArray[12] = false;
newItem.condimArray[13] = true;
newItem.condimArray[14] = false;
newItem.condimArray[15] = false;
newItem.condimArray[16] = false;
newItem.condimArray[17] = false;
newItem.condimArray[18] = false;
newItem.condimArray[19] = false;
newItem.condimArray[20] = false;
newItem.condimExpanded = true;
newItem.condimFlag = true;
newItem.condimPrice = 0;
newItem.deleted = false;
newItem.desc = "Genoa Salami, Mortadella Coppacola, Ham, Prosciutto, Provolone (no substitutions)";
newItem.large = true;
newItem.name = "GODMOTHER. (large,Italian Roll,)";
newItem.price = "8.15";
newItem.quantity = "1";
newItem.specialRequest = "No special requests";

// add new order item to order
objOrder.orderItems = new Array();
objOrder.orderItems.push(newItem);
objOrder.count = 1;

// display order on form
DisplayOrder();

// fill out order form
$('#company').val(company);
$('#name').val(name);
$('#phone').val(phone);
$('#email').val(email);
$('#pickup').focus();

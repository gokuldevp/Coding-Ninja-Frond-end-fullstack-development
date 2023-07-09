Property Exists

Implement a function propertyExists(obj, path) that takes two arguments - an object and a path (string). It returns ‘False’ if the property is null or it doesn’t exist for that object, otherwise it will return the value of the property for that object.
Note: Properties can have single character only. So, path can be a string with concatenation of many properties.
Sample Input :
1  {"a":{"b":"dadsa"}} ac
Expected Output :
false
Sample Input :
2
{"a":{"b":"dadsa"}} ac
{"a":{"b":"dadsa"}} ab
Expected Output :
false
dadsa
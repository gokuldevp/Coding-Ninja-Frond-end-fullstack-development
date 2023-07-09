Custom Asynchrony

Given a function randomAsyncFunction() which completes after an unknown amount of time and does not return a promise. Write a function asyncWithCallback() that will take a callback function and will call the randomAsyncFunction() and the callback() will be executed only after the randomAsyncFunction() is completed.
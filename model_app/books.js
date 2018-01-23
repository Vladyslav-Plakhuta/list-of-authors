           
          
        var app = angular.module("listOfBooks",[]);
        app.controller("booksCtrl", function($scope){
            $scope.showBooks = false;

            $scope.currentAuthor = {};
            $scope.showBookList = function(author){
                $scope.showBooks = !$scope.showBooks;
                $scope.currentAuthor = author;
            }

            $scope.addBook = function(){
                $scope.currentAuthor.books = $scope.currentAuthor.books || [];
                var book = {};
                book.title = "";
                book.genre = "";
                book.pages = "";
                $scope.currentAuthor.books.push(book); 
            };

            $scope.delBook = function(){
                var newArr=[];
                angular.forEach($scope.currentAuthor.books,function(v){ 
                    if(!v.isDelete){ 
                        newArr.push(v); 
                    } 
                });  
                $scope.currentAuthor.books=newArr;
            };
            $scope.saveBookLS = function(){
                localStorage.setItem('currentAuthor.books', JSON.stringify($scope.currentAuthor.books));
            };
        });
                
               
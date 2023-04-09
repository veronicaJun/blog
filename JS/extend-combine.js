    function SuperClass(name) {
        this.name = name; 
        this.books = ['Js','CSS'];
    }
    SuperClass.prototype.getBooks = function() {
        console.log(this.books);
    }
    function SubClass(name,time) {
        SuperClass.call(this,name);
        this.time = time;
    }
    SubClass.prototype = new SuperClass();

    SubClass.prototype.getTime = function() {
    console.log(this.time);
    }
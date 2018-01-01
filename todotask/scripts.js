//////////////////////////////////////////////////////
//                                                  //
//  Developed by: Vishal Chopra                     //
//  Website: vishalchopra.me                        //
//  Github: http://github.com/vishalchopra13        //
//  Facebook: http://wwwfacebook.com/vishalchopra13 //
//  Twitter: http://twitter.com/vishalchopra13      //
//  Email: hello@vishalchopra.me                    //
//                                                  //
//////////////////////////////////////////////////////

var _todo = (function(){

    var tasks = [];
    
    function _tasks(name, status){
        this.name = name;
        this.status = 'incomplete';
    }
    
    function save(){
        localStorage.setItem('_todo', JSON.stringify(tasks));
    }
    
    function load(){
        tasks = JSON.parse(localStorage.getItem('_todo'));
        if(tasks === null || tasks === undefined){
            tasks = [];
        }
    }
    load();
    
    // public functions
    var obj = {};
    
    obj.addTask = function(name){
        // check if name is array
        var check = Array.isArray(name);
        
        // if it's really an array, then push all of them into tasks array.
        if(check === true) {
            for(var i = 0; i < name.length; i++){
                var task_ = new _tasks(name[i]);
                tasks.push(task_);
            }
        } 
        // if not array that means it is only a string then simply push it into the tasks array.
        else {
            var task_ = new _tasks(name);
            tasks.push(task_);
        }
        save();
    };
    
    obj.delete = function(name){
        for(var i in tasks){
            if(tasks.hasOwnProperty(i)){
                if(tasks[i].name === name){
                    tasks.splice(i, 1);
                }
            }
        }  
        save();
    };
    
    obj.displayData = function(){
        var listCopy = []; 
        for(var i in tasks){
            var data = tasks[i];
            var dataCopy = {};
            for(var i in data){
                dataCopy[i] = data[i];
            }
            listCopy.push(dataCopy);
        }
        return listCopy;
    };
    
    obj.complete = function(name){
        for(var i in tasks){
            if(tasks.hasOwnProperty(i)){
                if(tasks[i].name === name){
                    tasks[i].status = 'completed';
                }
            }
        }
        save();
    };
    
    obj.incomplete = function(name){
        for(var i in tasks){
            if(tasks.hasOwnProperty(i)){
                if(tasks[i].name === name){
                    tasks[i].status = 'incompleted';
                }
            }
        }
        save();
    };
    
    obj.log = function(){
        console.log(tasks);
    };
    
    return obj;
})();
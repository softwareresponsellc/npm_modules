'use strict';

/* SR-Mongo-SQL */
/*
    Methods:
        Statement: Execute a SQL Statement. Can be Select, Update, Insert, or Delete
        Select: Execute a Select Statement. Broken into three inputs. fields default to all (*)
        Update: Execute an Update Statement. Broken into three inputs.
        Insert: Execute an Insert Statement. Broken into three inputs.
        Delete: Execute a Delete Statement. Broken into two inputs.
    Conditions [WHERE, ORDER BY, LIMIT, GROUP BY]
*/
exports.mongoSQL = {
    connect:function(){

    }
    ,statement:function(statement){

    }
    ,select:function(collection,fields="*",conditions){

    }
    ,update:function(collection,fieldValuePairs,conditions){

    }
    ,insert:function(collection,fields,values){

    }
    ,delete:function(collection,conditions){

    }
    ,get:function(record,fieldname){

    }
} 
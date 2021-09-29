function changePort(port){
    if(1024 <= port && port <= 65535){

        try {
            var fs = require('fs')
            fs.readFile('ffserver.conf', 'utf-8', function(err, data){
            
                var result = data.replace(/Port [0-9]*/g, 'Port ' + port);
    
                fs.writeFile('ffserver.conf', result, 'utf-8', function(err){
                    if(err) return console.log(err);
                });
            });
          } catch (error) {
            console.error(error);
          }
    }    
}

changePort(1024)


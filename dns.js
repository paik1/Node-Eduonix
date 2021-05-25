let dns = require('dns');

dns.resolve4('www.facebook.com', (error,address) => {
    if(error){
        throw error;
    }else{
        console.log(`address: ${JSON.stringify(address)}`);
    }
    address.forEach((address)=>{
        dns.reverse(address, (error, hostname) => {
            if(error){
                throw error;
            }else{
                console.log(`reverse for ${address} : ${JSON.stringify(hostname)}`);
            }
        });
    });
});
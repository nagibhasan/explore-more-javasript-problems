const phone = [
{name: 'samsung', camara: 12, storage: '32gb', price: 36000, color: 'silver' },    
{name: 'walton', camara: 10, storage: '32gb', price: 22000, color: 'silver' },    
{name: 'iphone', camara: 10, storage: '32gb', price: 82000, color: 'silver' },    
{name: 'xaomi', camara: 12, storage: '32gb', price: 52000, color: 'silver' },    
{name: 'Oppo', camara: 12, storage: '32gb', price: 20000, color: 'silver' },    
{name: 'Nokia', camara: 12, storage: '32gb', price: 44000, color: 'silver' },    
{name: 'HTC', camara: 12, storage: '32gb', price: 62000, color: 'silver' },    
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phone);
console.log(mySelection);
const fetchCheeses = async ()=> {
    const response = await fetch('https://f373cc220b144f0c952db117bcb62e2b.vfs.cloud9.us-east-2.amazonaws.com/api/cheeses');
    
    const data = await response.json();
    return data;
};

module.exports = {
    fetchCheeses
}
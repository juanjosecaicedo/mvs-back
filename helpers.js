module.exports = {
    remplasar: (int)=>{
        return int.toString().replace(/[^\d-]/g, '') * 1;
    }
}
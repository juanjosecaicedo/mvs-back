class IndexController {
    constructor(){}
    index(req, res){
        res.json({
            messagge: 'Esta es la api de MISION VIDA SEGADORES'
        })
    }
}
module.exports = new IndexController();
const db = require('../database');
const {format, getMonth} = require('../helpers')

class ChartsController {
    constructor(){}
    charts(req, res){
        console.log(req.params)
        db.query(`SELECT MONTH(fecha) AS mes FROM ${req.params.table} WHERE YEAR(fecha) = ? GROUP BY MONTH(fecha)`,
        [req.params.year], function(err, result){
            if(!err){
                
                var data = [];
                var months = [];
                result.forEach(item => {
                    data.push(
                        getMonth(item.mes),
                    );
                    months.push(item.mes);
                });                
                // getTotalMonth(req.params.year, 4, req.params.table);
                // console.log(getTotalMonth(req.params.year, 4, req.params.table));
                
                res.json({
                    label: data,
                    months: months
                })
            }
        })
    }
    getTotalMonth(req, res){
        db.query(`SELECT SUM(cantidad) AS cantidad FROM ${req.params.table} WHERE YEAR(fecha) = ${req.params.year} AND MONTH(fecha) = ${req.params.month}`, function(err, result) {
            if(!err){
                res.json(result[0].cantidad);
            }
        })
    }   
}

// function getMonth (month){
//     switch (parseInt(month)) {
//         case 1:
//             return 'Enero'
//             break;
//         case 2:
//                 return 'Febrero'
//                 break;
//         case 3:
//             return 'Marzo'
//             break;
//         case 4:
//             return 'Abril'
//             break;
//         case 5:
//             return 'Mayo'
//             break;
//         case 6:
//             return 'Junio'
//             break;
//         case 7:
//             return 'Julio'
//             break;
            
//         case 8:
//             return 'Agosto'
//             break;
            
//         case 9:
//             return 'Septiembre'
//             break;
            
//         case 10:
//             return 'Octubre'
//             break;
            
//         case 11:
//             return 'Noviembre'
//             break;
            
//         case 10:
//             return 'Diciembre'
//             break;            
//     }
// }



module.exports = new ChartsController();
//import
var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');

//initialize
const app = express();
const router = express.Router();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = "http://www.jadlog.com.br/trackingdetalhe.jsp?cte=";
const url_dev = "http://jadlog.com.br/siteDpd/tracking_dev.jad?cte=";
const method = "GET";
const port = 3000;

//initilize routes
router.get('/', (req, res) => {
    res.status(200).json({status:true, api: 'Rastreio JadLog', author: "Pedro Entringer"});
});

router.get('/rastreio/dev/:cte', (req, res) => {
    let cte = req.params.cte;
    request( {url: url_dev + cte, method: method, followAllRedirects: true, jar: true} , function(error, response, body) {
        if (error) {
            res.status(500).json({status:false, message: 'Houve um problema ao executar a operação. Tente mais tarde.', error: error});
        } else {
            
            var $ = cheerio.load(body);
            var tracking = [];

            $('#j_idt2_data tr').each(function(i) {


                if( $(this).find('td').eq(0).text().trim() != 'Não existem dados referentes a remessa.'){
                    let data_hora = $(this).find('td').eq(0).text().trim().replace('  ', '').split(' ');
                    let track = {
                        documento: $(this).find('td').eq(4).text().trim(),
                        data: data_hora[0],
                        hora: data_hora[1],
                        origem: $(this).find('td').eq(1).text().trim(),
                        status: $(this).find('td').eq(2).text().trim(),
                        destino: $(this).find('td').eq(3).text().trim()
                    }
                    tracking.push(track);
                }
                
            });

            if(tracking.length > 0){
                res.status(200).json({status:true, message: 'Rastreamento CT-e ' + cte, tracking: tracking});
            }else{
                res.status(500).json({status:false, message: 'Não existe tracking para este conhecimento'});
            }
        }
    });
});

router.get('/rastreio/:cte', (req, res) => {
    let cte = req.params.cte;
    request( {url: url + cte, method: method, followAllRedirects: true, jar: true} , function(error, response, body) {
        if (error) {
            res.status(500).json({status:false, message: 'Houve um problema ao executar a operação. Tente mais tarde.', error: error});
        } else {
            
            var $ = cheerio.load(body);
            var tracking = [];

            $('table.bordas tr:not(:first-child)').each(function(i) {
                let track = {
                    documento: $(this).find('td').eq(0).text().trim(),
                    data: $(this).find('td').eq(1).text().trim(),
                    hora: $(this).find('td').eq(2).text().trim(),
                    origem: $(this).find('td').eq(3).text().trim(),
                    status: $(this).find('td').eq(4).text().trim(),
                    destino: $(this).find('td').eq(5).text().trim()
                }
                tracking.push(track);
            });

            if(tracking.length > 0){
                res.status(200).json({status:true, message: 'Rastreamento CT-e ' + cte, tracking: tracking});
            }else{
                res.status(500).json({status:false, message: 'Não existe tracking para este conhecimento'});
            }
        }
    });
});

app.use('/jadlog/', router);
app.listen(port);
console.log('API ONLINE - ON PORT ' + port);
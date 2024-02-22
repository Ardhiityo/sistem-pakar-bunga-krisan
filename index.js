const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('form/pengorokDaun');
});

app.post('/pengorokDaun', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/pengorokDaun');
    } else {
        res.render('form/thrips');
    }
});

app.post('/thrips', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/thrips');
    } else {
        res.render('form/karatPutih');
    }
});

app.post('/karatPutih', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/karatPutih');
    } else {
        res.render('form/layuFusarium');
    }

});

app.post('/layuFusarium', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/layuFusarium');
    } else {
        res.render('form/embunJelaga');
    }

});

app.post('/embunJelaga', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/embunJelaga');
    } else {
        res.render('form/embunTepung');
    }

});

app.post('/embunTepung', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/embunTepung');
    } else {
        res.render('form/virusKerdil');
    }

});

app.post('/virusKerdil', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/virusKerdil');
    } else {
        res.render('form/kapangDaun');
    }

});

app.post('/kapangDaun', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/kapangDaun');
    } else {
        res.render('form/bercakDaun');
    }
});

app.post('/bercakDaun', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/bercakDaun');
    } else {
        res.render('form/ulatTentara');
    }

});

app.post('/ulatTentara', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/ulatTentara');
    } else {
        res.render('form/hawarDaun');
    }

});

app.post('/hawarDaun', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/hawarDaun');
    } else {
        res.render('form/busukPangkal');
    }

});

app.post('/busukPangkal', (req, res) => {
    const {
        indicator
    } = req.body;
    if (indicator === 'y') {
        res.render('diagnosa/busukPangkal');
    } else {
        res.send('Selesai');
    }
});



app.listen(8080, () => {
    console.log('listening on port http://localhost:8080');
})
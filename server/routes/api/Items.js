const express = require('express');
const router = express.Router();
var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {

        let fileExtension = file.originalname.split(".")
        let orig = fileExtension[0]
        fileExtension = fileExtension[fileExtension.length-1]
    
      const uniqueSuffix = Date.now() +"."+fileExtension
      cb(null, orig + uniqueSuffix)
    }
  })
function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    let fileExtension = file.originalname.split(".")
    fileExtension = fileExtension[fileExtension.length-1]

    let accepted_types = ["png", "doc", "docx", "pdf", "jpg"]

    if(accepted_types.indexOf(fileExtension) < 0)
    {
        cb("File type not allowed", false)
        return false;
    }

  // To accept the file pass `true`, like so:
  cb(null, true)
  }
  var upload = multer({ storage: storage , fileFilter: fileFilter})


//Item Model

const Item = require('../../model/Item');

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/', (req, res)=>{
    
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items));
});


// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/listFiles', (req, res)=>{
    
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items));
});





// @route  Post api/items
// @desc   Create A Post
// @access Public
router.post('/', (req, res)=>{
    const newItem = new Item({
        fileName: req.body.fileName
    });
 
    
 
 
    newItem.save().then(item => res.json(item));
 });
 


// @route  Post api/items
// @desc   Create A Post
// @access Public
router.post('/uploadDocument', upload.single('myCVFile'), (req, res)=>{

    let fileExtension = req.file.originalname.split(".")
    fileExtension = fileExtension[fileExtension.length-1]
    let fileType = req.file.mimetype
    let fileName = req.file.filename
    let fullURL = `http://localhost:5000/${fileName}`

    //res.send(`File Name: ${fileName}\nDescription: ${fileDesc}\nType: ${fileType}\nFileExt: ${fileExtension}`)

    const newItem = new Item({
        fileName: fileName,
        fileType: fileType,
        fileURL: fullURL
    });
    newItem.save().then(item => res.json(item));

    res.send(newItem)
 });
 
  
// @route  delete api/items/:id
// @desc   Delete an item
// @access Public
router.delete('/:id', (req, res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true}))
    )
    .catch(err => res.status(404).json({ success: false}));
  }); 
  




module.exports = router;
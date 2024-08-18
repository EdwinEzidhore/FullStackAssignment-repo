const ErrorHandler = require('../Utils/ErrorHandler');
const cardModel = require('../Models/Card/Card');

const CreateCard = async(req,res,next) => {
    try {
        const { title,description } = req.body.card; 
        if (!title || !description) {
            return next(new ErrorHandler('check all fields!'));           
        }
        
        
        const newCard = await  cardModel.create({
            title: title,
            description: description
        });

        if (newCard) {
            return res.status(201).json({success:true,msg:'New card created'})
        }
      
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

const getCards = async(req,res,next) => {
    try {
        const cards = await cardModel.find({});
        
        if (!cards) {
            return next(new ErrorHandler('No cards found!',404))
        }
        return res.status(200).json({ success: true, msg: 'Cards found!', card: cards });
    } catch (error) {
        return next(new ErrorHandler(error.message))
    }
}

const getSingleCard = async(req, res, next) => {
    try {
        const { title } = req.params;
       
        
        if (title) {
            const card = await cardModel.find({ title:title })
            
            
            if (card) {
                return res.status(200).json({ success: true, msg: 'Card found!', card: card });
            }
            return next(new ErrorHandler('No card found!', 404))
        }
        return next(new ErrorHandler('Empty query!', 404));

    } catch (error) {
        return next(new ErrorHandler(error.message))
    }
};

module.exports = {
    CreateCard,
    getCards,
    getSingleCard
}
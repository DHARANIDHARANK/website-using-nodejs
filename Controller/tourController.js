const fs = require('fs');
const Tour = require('./../Model/tourModel');

const addTour = (req, res) => {
    const newID = details[details.length - 1].id + 1;
    const newTour = Object.assign({ id: newID }, req.body);

    details.push(newTour);

    try {
        fs.writeFile(`${__dirname}/../data/tours-simple.json`, JSON.stringify(details), (err) => {
            if (err) {
                console.error("Error writing a file:" , err)
                res.status(500).json({ status: err.message, message: "Error creating tour" });
            } else {
                res.status(201).send({ status: 'success', data: { tour: newTour } });
            }
        });
    } catch (err) {
        console.error("Error writing a file: ", err);
        res.status(500).json({ status: err.message, message: "Error creating tour" });
    }
}

const createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err) {
        // Log an error message or handle it accordingly
        console.error("An error occurred:", err.message);
    }
}

// exports.createTour = (req, res) => {
//     // console.log(req.body);
  
//     const newId = tours[tours.length - 1].id + 1;
//     const newTour = Object.assign({ id: newId }, req.body);
  
//     tours.push(newTour);
  
//     fs.writeFile(
//       `${__dirname}/dev-data/data/tours-simple.json`,
//       JSON.stringify(tours),
//       err => {
//         res.status(201).json({
//           status: 'success',
//           data: {
//             tour: newTour
//           }
//         });
//       }
//     );
//   };



const getALLTours = (req,res) => {
    res.status(200).json({
        status: "success",
         createdTime: req.requestTime 
        // no_of_tours: details.length,
        // data: details
    });
}

const searchTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;

    //const detail = details.find(el => el.id === id);
    // if (!detail) {
    //     res.status(404).send({
    //         status: "error",
    //         message: "Data not found"
    //     });
    // } else {
        // res.status(200).send({
        //     status: "success finding the data",
        //     data: {
        //         detail: detail
        //     }
        // });
   // }
}


const deleteTour = (req, res) => {
    if (req.params.id * 1 > details.length) {
        return res.status(400).send({
            status: "fail",
            message: "< Invalid data >"
        });
    } else {
        res.status(200).json({ status: "success", data: { detail: null } });
    }
};


const updateTour = (req, res) => {
    // if (req.params.id * 1 > details.length) {
    //     return res.status(400).send({
    //         status: "fail",
    //         message: "< Invalid data >"
    //     });
    // } else 
    {
        res.status(200).json({ status: "success", data: { detail: updatedDetail } });
    }
}

module.exports = {
    getALLTours,
    searchTour,
    createTour,
    deleteTour,
    addTour,
    updateTour,
    checkID,
    checkBody
};

import { useState } from 'react';
import axios from 'axios';

function Prediction() {

    const [formData, setFormData] = useState({
        name: '',
        Gender: '1',
        Caste: '1',
        Maths: '',
        English: '',
        Science: '',
        Guardian: '0',
        Internet: '0',
    });

    const [prediction, setPrediction] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();


        const dataToSend = {
            gender: [parseInt(formData.Gender, 10)],
            caste: [parseInt(formData.Caste, 10)],
            mathematics_marks: [parseFloat(formData.Maths)/100],
            english_marks: [parseFloat(formData.English)/100],
            science_marks: [parseFloat(formData.Science)/100],
            science_teacher: [6], // Always 6
            languages_teacher: [7], // Always 7
            guardian: [parseInt(formData.Guardian, 10)],
            internet: [parseInt(formData.Internet, 10)],
        };

        console.log(FormData);

        try {
            const response = await axios.post('https://eduinsight.onrender.com/predict', dataToSend);
      
            console.log(response.data);
            if (response.data) {
              setPrediction(response.data['predictions'][0]);
            } else {
              setPrediction('Prediction not available');
            }
          } catch (error) {
            console.error('Error:', error);
            setPrediction('ask you to fill the form before the results.');
          }
        };



  return (
    <div className="prediction w-full h-auto bg-gradient-to-r from-[#adbcf7] to-[#ea8895] overflow-y-scroll">
        <div className="heading">
            <div className="text-1 p-10 text-5xl text-center text-black">Predict the chances of Dropping Out</div>
            <div className="text-2  text-1xl text-center text-gray-500 mb-2">Worried about your child dropping out?<br/>fill this form to check the chances of them dropping out and stay aware from beforehand</div>
        </div>
        <form className="form w-full flex justify-center items-center flex-col pb-10" onSubmit={handleSubmit}>
            <div className="section p-2 flex flex-col w-7/12">
                <label htmlFor="name" className="label mb-3">Name:</label>
                <input type="text" name="name" id="name" className="input rounded-md outline-0 h-10" onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            </div>
            <div className="section p-2 flex flex-col w-7/12">
                <label htmlFor="Gender" className="label mb-3">Gender:</label>
                <select name="Gender" className="rounded-md outline-0 h-10" onChange={(e) => setFormData({ ...formData, Gender: e.target.value })}>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                </select>
            </div>
            <div className="section p-2 flex flex-col w-7/12">
                <label htmlFor="Caste" className="label mb-3">Caste:</label>
                <select name="Caste" className="rounded-md outline-0 h-10" onChange={(e) => setFormData({ ...formData, Caste: e.target.value })}>
                    <option value="0">SC</option>
                    <option value="1">BC</option>
                    <option value="2">OC</option>
                    <option value="3">ST</option>
                </select>
            </div>
            <div className="section p-2 flex justify-between w-7/12">
                <div className="Maths flex flex-col">
                    <label htmlFor="Maths" className="label mb-3">Maths Marks in %:</label>
                    <input type="number" step=".01" name="Maths" id="Maths" className="input rounded-md outline-0 h-10" onChange={(e) => setFormData({ ...formData, Maths: e.target.value })} />
                </div>
                <div className="English flex flex-col">
                    <label htmlFor="English" className="label mb-3">English Marks in %:</label>
                    <input type="number" step=".01" name="English" id="English" className="input rounded-md outline-0 h-10" onChange={(e) => setFormData({ ...formData, English: e.target.value })} />
                </div>
                <div className="Science flex flex-col">
                    <label htmlFor="Science" className="label mb-3">Science Marks in %:</label>
                    <input type="number" step=".01" name="Science" id="Science" className="input rounded-md outline-0 h-10" onChange={(e) => setFormData({ ...formData, Science: e.target.value })} />
                </div>
                
            </div>
            <div className="section p-2 flex flex-col w-7/12">
                <label htmlFor="Guardian" className="label mb-3">Which Guardian Does spends more time with the child?</label>
                <select name="Guardian" className="rounded-md outline-0 h-10" onChange={(e) => setFormData({ ...formData, Guardian: e.target.value })}>
                    <option value="0">Mother</option>
                    <option value="1">Father</option>
                </select>
            </div>
            <div className="section p-2 flex flex-col w-7/12">
                <label htmlFor="Internet" className="label mb-3">Does the child have connection to Internet?</label>
                <select name="Internet" className="rounded-md outline-0 h-10" onChange={(e) => setFormData({ ...formData, Internet: e.target.value })}>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>
            <button type="submit" className="btn bg-[#7d39c5] text-white opacity-80  rounded-md w-2/12 h-10 mt-5">Predict</button>
            {prediction&&<label className="label mt-5">{"The Student" +" will " +prediction}</label>}
        </form>
    </div>
  )
}

export default Prediction
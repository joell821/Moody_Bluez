import { useState } from "react";

const ForecastForm = ({ action, data}) => {
    const { zipCode } = data;

    const [fieldValue, setFieldValue] = useState('');

const handleChange = e => {
    const target = e.target.value;
    setFieldValue(target);
  };

    return (
    <form onSubmit={e => action(e, zipCode === fieldValue)}>
      <div className="forecast">
        <label>{zipCode}</label>
        <input onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  )
};

export default QuestionForm;
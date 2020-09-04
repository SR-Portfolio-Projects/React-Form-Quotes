import React, { useState } from "react";

const QuotesForm = props => {
  console.log("Props From Quote Form",props);

  const [quote, setQuote] = useState({
    name: "",
    body: ""
  });


  const changeHandler = (e) => {
    setQuote({
      ...quote, [e.target.name]: e.target.value
    })
    console.log("Quote State From Quote Form", quote);
  }
  

  const submitForm = e => {
    e.preventDefault(); 
    props.addNewQuote(quote); 
    setQuote({ name: "", body: "" }); 
  };


  return(
    <form onSubmit = { submitForm}>
            <h1>Create A New Quote</h1>
      <label htmlFor = 'name'>Give Your Quote A Name</label>
      <input type = 'text' 
             name = 'name'
             value = {quote.name}
             onChange = { changeHandler }
      />

      <label htmlFor = 'body'>Enter Your Quote</label>
      <input type="textarea" 
             name="body"
             value={quote.body}
             onChange = { changeHandler }
      />

      <button type="submit">Add Quote</button>
    </form>
  );
};

export default QuotesForm;

import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState({
    color: "",
    spendTime: "",
    review: "",
    username: "",
    emails: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey answers:", answers);
    // Reset form
    setAnswers({
      color: "",
      spendTime: [],
      review: "",
      username: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    //(e) => { ... }: This is an arrow function that takes an event object e as its argument.
    //This event object contains information about the event that occurred, such as which input field triggered the change.

    // Extracting the name and value from the event target (input field)
    //This line destructures the name and value properties from the target property of the
    //event object. The target property refers to the element that triggered the event, which in this case is the input field that the user interacted with.
    const { name, value } = e.target;

    // Updating the state using the extracted name and value
    // The spread operator (...) is used to create a new object with the existing state values
    // The square brackets ([]) around the name variable indicate that it's a computed property name,
    // meaning that the actual property name will be determined dynamically based on the value of the name variable.
    // This allows us to update the state with the corresponding field name (e.g., username, email) dynamically.
    setAnswers((prevState) => ({
      //This line updates the state using the setAnswers function, which is provided by the useState hook. It takes a
      //callback function as an argument, which receives the previous state (prevState) as its argument. Inside the callback
      //function, a new state object is created using the spread operator (...prevState) to copy all existing state properties,
      //and then the value of the input field that triggered the change is updated dynamically using computed property names ([name]: value).
      ...prevState,
      [name]: value, //name and value: These variables hold the name and value of the input field that triggered the change.
      //The name variable corresponds to the name attribute of the input field, while the value variable corresponds to the value entered by the user into the input field.
    }));
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answers} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleChange}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleChange}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleChange}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" onChange={handleChange} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;

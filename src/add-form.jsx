import React from "react";
import "./add-form.css";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";



class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };


  }

  render() {
    return (
      <div>
         <Header />
         <div id="form">
            <form id="addCreatorForm">
               <label>Name</label>
               <input type="text" id="name" name="name" required></input>
               <label>
                  Image
                  <p>Provide a link to an image of your creator. Be sure to include the http://</p>
               </label>
               <input type="text" id="image" name="image" required></input>
               <label>
                  Description
                  <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
               </label>
               <textarea id="description" name="description" required></textarea>
               <h3>SOCIAL MEDIA LINKS</h3>
               <p>Provide at least one of the creator's social media links.</p>
               <label>
                  <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                  YouTube
                  <p>The creator's YouTube handle (without the @)</p>
               </label>
               <input type="text" id="youtube" name="youtube" value=""></input>
               <label>
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  Twitter
                  <p>The creator's Twitter handle (without the @)</p>
               </label>
               <input type="text" id="twitter" name="twitter" value=""></input>
               <label>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  Instagram
                  <p>The creator's Instagram handle (without the @)</p>
               </label>
               <input type="text" id="instagram" name="instagram" value=""></input>
               <button type="submit">Submit</button>
            </form>
         </div>
      </div>
    );
  }
}

export default AddForm;
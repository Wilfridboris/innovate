import React from "react";
class ContactForm extends React.Component {
      render() {
        return <div id="ff-compose"></div>;
      }
      componentDidMount(){
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/113876169432287821920/form/1FAIpQLSdfg40T_cEjP-sZC_GWXm1ne0eXFWj_rjbhh8TMFqsFgH1PjA/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
      }
    }
    export default ContactForm
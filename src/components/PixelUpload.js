import React, { Component } from "react";
 
class PixelUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write any pixel link.",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    let element = new DOMParser().parseFromString(this.state.value, "text/xml");
    let allElements = [];
    if (element?.body == null) {
      var children = element.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        let elementData = { name: child.tagName };
        let attributes = [];
        for (var j = 0; j < child.attributes.length; j++) {
          let attribute = child.attributes[j];
          let key = attribute.name;
          let value = attribute.value;
 
          attributes.push({ [key]: value });
        }
        elementData.attributes = attributes;
        allElements.push(elementData);
      }
    }
 
    console.log(JSON.stringify(allElements));
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
            Pixel:
                <textarea  className="form-control" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
        
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    );
  }
}
 
export default PixelUpload;
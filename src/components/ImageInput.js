import React, {PropTypes, Component} from "react"

/**
 * Presentationnal Component only
 */
export default class ImageInput extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    var preview = document.getElementById('whisky_thumbnail');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      // console.log('load is trigger !');
      file.value = reader.result;
      preview.src = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  render(){
    var imgStyle = {
      height: 50,
      width: 50
    }
    return (<div>
      <label htmlFor="image">Image</label>
      <input
        id="input_image"
        type="file"
        name="input_image"
        onChange={this.handleChange}
      />
      <img id="whisky_thumbnail" src="" style={imgStyle} />
    </div>
  );
  }
}

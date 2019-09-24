import React from 'react';

class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response => {
              const {memes} = response.data
              this.setState({allMemeImgs: memes})
        })
    }

    render() {

        return(
            <div>
                <form className="meme-form">
                    
                        <input
                           type="text" 
                           name="topText" 
                           value={this.state.topText} 
                           placeholder="Top Text"
                           onChange={}
                        />
               
                    <input
                           type="text" 
                           name="bottomText" 
                           value={this.state.bottomText} 
                           placeholder="Bottom Text"
                           onChange={}
                        />
                      
                    <button>Generate</button>
                </form>
            </div>
        )
    }
}
    


export default MemeGenerator;
import React, { useState } from 'react'

export default function TextForm(props) {

    // Function called during button pressed

    const onClickHandle = () => {
        console.log("Upper case was clicked " + Text)
        let newText = Text.toUpperCase();
        setText(newText)
    }


    const onClickHandle2 = () => {
        console.log("Loweer case was clicked " + Text)
        let newText = Text.toLowerCase();
        setText(newText)
    }


    const onClickHandle3 = () => {
        console.log("Loweer case was clicked " + Text)
        let newText = Text.replace(Text, '')
        setText(newText)
    }



    const handleOnChange = (event) => {
        console.log("TTT")
        setText(event.target.value)
    }


    const capitalize = () => {
        const titleCase = Text
            .toLowerCase()
            .split(' ')
            .map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(' ');

        setText(titleCase);
    }


    const handleCopy = () => {
        navigator.clipboard.writeText(Text)
        props.showAlert("Text copied!","success")
        //console.log("Text Copied")


    }

    // const handlerfuncTranslate = async () =>{
    //     translate.engine = "google";
    //     translate.key = process.env.GOOGLE_KEY;

    //     const textvalue = await translate(Text,"fr");
    //     setText(textvalue);
    // }


    const onClickHandle4 = () => {
        let newtext = ""
        for (let index = 0; index < Text.length; index++) {
            if ((index % 2)=== 0) {
                newtext += Text[index].toLowerCase()
            }
            else {
                newtext += Text[index].toUpperCase()
            }

        }
        setText(newtext)
    }



    // const boldText = ()=> {
    //         if(Text.fontWeight === "normal")
    //             setText({fontWeight: "bold"});
    //         else if(Text.fontWeight === "bold")
    //             setText({fontWeight: "normal"});
    //     }

    // const trim = () =>{
    //     setText(Text.trim());
    //    }

    // const handleEmail =()=>{
    //     let newText=Text.split("@");
    //     let later = newText[1].split(".");
    //     setText("Your account is on "+ later[0] + " And your username could be" + newText[0]);
    // }

    // const handleTcclick=()=>{
    //     const newText = Text.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');       
    //     setText(newText);
    // }

    const [Text, setText] = useState(" ")


    return (

        // Buttons to operate different tasks
        <>
            <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>

                <h1>{props.heading}</h1 >

                <div className="mb-3">

                    <textarea className="form-control mx-2 my-2" id="myBox" style={{backgroundColor : props.mode === 'dark'?'grey':'white' ,color :props.mode === 'dark'?'white':'black' }} onChange={handleOnChange} value={Text} rows="8"></textarea>

                    <button className="btn btn-primary my-2" onClick={onClickHandle}>Convert to Uppercase</button>

                    <button className="btn btn-primary mx-2 my-2" onClick={onClickHandle2}>Convert to Lowercase</button>

                    <button className="btn btn-primary mx-2 my-2" onClick={onClickHandle4}>Alternat Text Uppercase</button>

                    <button className="btn btn-primary mx-2 my-2" onClick={capitalize}>Capitalize 1st letter</button>

                    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy whole text</button>

                    {/* <button className="btn btn-primary mx-2" onClick={handlerfuncTranslate}>Translate</button> */}

                    {/* <button className="btn btn-primary mx-2" onClick={trim}>Trim</button> */}

                    {/* <button className="btn btn-primary mx-2" onClick={handleEmail}>Extract Email</button> */}

                    {/* <button className="btn btn-primary mx-2" onClick={handleTcclick}>Titlecase</button> */}

                    <button className="btn btn-primary mx-2" onClick={onClickHandle3}>Clear Text</button>

                </div>
            </div >

            {/* Text summaey and preview */}

            <div className="cotainer my-5" style={{color : props.mode === 'dark'?'white':'black'}}>

                <h1>Text summary</h1>

                <p>{Text.split(" ").length} words and {Text.length} character</p>

                <p>{0.008 * (Text.split(" ").length)} Minutes read </p>



            </div>

            <div className="container my-5" style={{color : props.mode === 'dark'?'white':'black'}}>

                <h1>Preview</h1>

                <p>{Text}</p>

            </div>
        </>

    )
}

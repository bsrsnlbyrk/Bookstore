import React from 'react';

const Form = ({ method, onSubmit, inputs }: any) => {
    return(
        <form method={method} onSubmit={onSubmit}>
            <div className="form-wrapper">
                <div className="form">
                    {inputs.map((input: any) => (
                        <input 
                            type={input.type} 
                            name={input.name} 
                            key={input.name}
                            placeholder={input.placeholder}
                        />
                    ))}
                </div>
                <img src="https://i-h1.pinimg.com/345x/f0/0f/8b/f00f8bc643432457ba0d1c833ddc758d.jpg" alt="image" width="300" height="425" />
            </div>
            
            <div className="submit">
                <button type="submit" className="submit-button">Kaydet</button>
            </div>
        </form>
    );
}
export default Form;
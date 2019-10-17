import React from 'react';

const Form = ({ method, onSubmit, inputs }: any) => {
    return(
        <form method={method} onSubmit={onSubmit}>
            <div style={{width: '50%', margin: '20px auto 20px', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    {inputs.map((input: any) => (
                        <input 
                            type={input.type} 
                            name={input.name} 
                            key={input.name}
                            placeholder={input.placeholder}
                            style={{width: '340px', height: '30px', margin: '20px auto 0px', borderRadius: '5px', border: '2px solid #77F5B0'}}
                        />
                    ))}
                </div>
                <img src="https://i-h1.pinimg.com/345x/f0/0f/8b/f00f8bc643432457ba0d1c833ddc758d.jpg" alt="image" width="300" height="425" style={{margin: '20px 0 0', minWidth: "300px"}}/>
            </div>
            
            <div style={{width: '50%', margin: '0 auto 0', display: 'flex', justifyContent: 'flex-end'}}>
                <button type="submit" style={{background: 'none', border: '2px solid #77F5B0', height: '30px', borderRadius: '5px'}}>Kaydet</button>
            </div>
        </form>
    );
}
export default Form;
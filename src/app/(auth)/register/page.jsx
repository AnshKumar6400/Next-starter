import React from 'react'

const RegisterPage = () => {
    const [formData,setFormData]=useState({});

    const onHandleChange=(e)=>{
        const target=e.target;
        console.log(target.name,target.value)
        setFormData({...formData,[target.name]:target.value});
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        axios.post('/api/register',formData);
    }
    return (
<div>
    <h1>Register Page</h1>
    <form type="submit">
    <input type="text" name="username" placeholder="Username"/>
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Register</button>
    </form>
</div>
    )

}

export default RegisterPage

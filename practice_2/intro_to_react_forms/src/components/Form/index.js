import { useEffect, useState } from "react"


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [signup, setSignup] = useState(false);
    const [errors, setErrors] = useState([]);
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        setErrors([])
        if (!(email.includes('@'))){setErrors((errors) => ([...errors, 'Invalid Email']))}
        if (!email.length){setErrors((errors) => ([...errors, 'invalid email']))}
    }, [name, email, phoneNumber, staff, bio])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.length) return
        setRegistrations((registrations) => ([...registrations, [name,email,phoneNumber,staff,bio,signup]]));
        (() => {
            setName('');
            setEmail('');
            setPhoneNumber('');
            setStaff('');
            setBio('');
            setSignup('');
            setErrors([]);
        })();
    }
    return (
        <div>
            <h1>Registration Form</h1>
            {errors.length?(
                <div>
                    {errors.map(e=>(<p>{e}</p>))}
                </div>
            ):null}
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label htmlFor='name'>name
                        <input placeholder='name' onChange={(e) => {setName(e.target.value)}}>
                        </input>
                    </label>
                </div>
                <div>
                    <label htmlFor='name'>email
                        <input placeholder='name' onChange={(e) => {setEmail(e.target.value)}}>

                        </input>
                    </label>
                </div>
                <div>
                <label htmlFor='name'>phone num
                        <input placeholder='name' onChange={(e) => {setPhoneNumber(e.target.value)}}>

                        </input>
                    </label>

                </div>
                <div>
                    <label>
                        <input type="radio" value="Instructor" checked={staff === 'Instructor'} onChange={(e) => {setStaff(e.target.value)}}/> Instructor
                        <input type="radio" value="Student" checked={staff === 'Student'} onChange={(e) => {setStaff(e.target.value)}}/> Student
                    </label>
                </div>
                <div>
                    bio<textarea
                    rows='10'
                    cols='50'
                    placeholder='Write Your Bio Here'
                    onChange={(e) => {setBio(e.target.value)}}
                    >
                    </textarea>
                </div>
                <div>
                    <input
                    type="checkbox"
                    value={signup}
                    checked={signup}
                    onChange={(e) => {setSignup((signup) => (!(signup)))}}/>Sign up for email notifications
                </div>
                <div>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form

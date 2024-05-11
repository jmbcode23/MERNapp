import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleCancel } from '../redux/createWorkoutSlice';

function WorkoutForm() {
    // const isModalOpen = useSelector((state) => state.newWorkout.value)
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields)
        }

        if(response.ok){
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            setEmptyFields([])
            console.log("New wrkout added", json)
        }
    }

    return (
        <div>
            <form className='create' onSubmit={handleSubmit}>
                <h3>Add a new workout</h3>
                <label>Exercice title</label>
                <input className={emptyFields.includes('title') ? 'error' : ''} type='text' onChange={(e) => { setTitle(e.target.value) }} value={title} />
                <label>Load (in kg)</label>
                <input className={emptyFields.includes('load') ? 'error' : ''}  type='number' onChange={(e) => { setLoad(e.target.value) }} value={load} />
                <label>Reps</label>
                <input className={emptyFields.includes('reps') ? 'error' : ''}  type='number' onChange={(e) => { setReps(e.target.value) }} value={reps} />
                <button onClick={()=>dispatch(handleCancel())}>Add workout</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default WorkoutForm;